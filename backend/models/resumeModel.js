const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resumeSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    projects: {
      type: String,
      required: false,
    },
    skills: {
      type: String,
      required: false,
    },
    certifications: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);
