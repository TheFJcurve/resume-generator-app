const Resume = require("../models/resumeModel");
const mongoose = require("mongoose");
const os = require("os");
const fs = require("fs");
const path = require("path");
const latex = require("node-latex");

// get ALL Resumes
const getAllResumes = async (req, res) => {
  const resumes = await Resume.find({}).sort({ createdAt: -1 });
  if (!resumes) {
    return res.status(404).json({ error: "Resumes not found" });
  }
  res.status(200).json(resumes);
};

// get a Resume
const getResume = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Resume not found" });
  }

  const resume = await Resume.findById(id);

  if (!resume) {
    return res.status(400).json({ error: "Resume not found" });
  }

  res.status(200).json(resume);
};

// create a Resume
const createResume = async (req, res) => {
  const {
    name,
    heading,
    education,
    experience,
    projects,
    skills,
    certifications,
    latexCode,
    order,
    font,
  } = req.body;

  if (!name) {
    return res.status(400).send({ error: "Please fill the name field" });
  }

  try {
    const resume = await Resume.create({
      name,
      heading,
      education,
      experience,
      projects,
      skills,
      certifications,
      latexCode,
      order,
      font,
    });
    res.status(200).json(resume);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// delete a Resume
const deleteResume = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Resume not found" });
  }

  const resume = await Resume.findByIdAndDelete(id);

  if (!resume) {
    return res.status(400).json({ error: "Resume not found" });
  }

  res.status(200).json(resume);
};

// update a Resume
const updateResume = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Resume not found" });
  }

  const resume = await Resume.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!resume) {
    return res.status(400).json({ error: "Resume not found" });
  }

  res.status(200).json(resume);
};

// convert Latex to PDF
const convertPDF = async (req, res) => {
  const latexInput = req.body.latexCode;
  const name = req.body.name;

  const tempDir = os.tmpdir();
  const tempInputFile = path.join(tempDir, "input.tex");
  const tempOutputFile = path.join(tempDir, "output.pdf");
  fs.writeFileSync(tempInputFile, latexInput);
  const input = fs.createReadStream(tempInputFile);
  const output = fs.createWriteStream(tempOutputFile);
  const pdf = latex(input);

  pdf.pipe(output);
  pdf.on("error", (err) => console.error(err));
  pdf.on("finish", async () => {
    await res.download(tempOutputFile, `${name}.pdf`);
    res.status(200);
  });
};

module.exports = {
  getAllResumes,
  getResume,
  createResume,
  deleteResume,
  updateResume,
  convertPDF,
};
