const Resume = require("../models/resumeModel");
const mongoose = require("mongoose");
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

const convertPDF = async (req, res) => {
  const latexInput = req.body.latexCode;
  const name = req.body.name;

  fs.writeFileSync("input.tex", latexInput);
  const input = fs.createReadStream("input.tex");
  const output = fs.createWriteStream("output.pdf");
  const pdf = latex(input);

  pdf.pipe(output);
  pdf.on("error", (err) => console.error(err));
  pdf.on("finish", async () => {
    await res.download("output.pdf", `${name}.pdf`);
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
