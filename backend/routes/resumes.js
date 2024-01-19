const express = require("express");
const router = express.Router();
const {
  getAllResumes,
  getResume,
  createResume,
  deleteResume,
  updateResume,
} = require("../controllers/resumeController.js");

// GET ALL Resumes
router.get("/", getAllResumes);

// GET a Resume
router.get("/:id", getResume);

// POST a Resume
router.post("/", createResume);

// DELETE a Resume
router.delete("/:id", deleteResume);

// UPDATE a Resume
router.patch("/:id", updateResume);

module.exports = router;
