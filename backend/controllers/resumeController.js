const Resume = require("../models/resumeModel");
const mongoose = require("mongoose");

// get ALL Resumes
const getAllResumes = async (req, res) => {
  const resumes = await Resume.find({}).sort({ createdAt: -1 });
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
  const { heading, education, experience, projects, skills, certifications } =
    req.body;

  if (!heading) {
    return res.status(400).send({ error: "Please fill the heading field" });
  }

  try {
    const resume = await Resume.create({
      heading,
      education,
      experience,
      projects,
      skills,
      certifications,
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

module.exports = {
  getAllResumes,
  getResume,
  createResume,
  deleteResume,
  updateResume,
};
