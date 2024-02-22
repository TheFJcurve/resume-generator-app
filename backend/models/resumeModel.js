const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const headerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  personalWebsite: {
    type: String,
    required: false,
  },
  linkedinUrl: {
    type: String,
    required: false,
  },
});

const educationSchema = new Schema({
  institute: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  graduationDate: {
    type: String,
    required: false,
  },
  relevantCourses: {
    type: String,
    required: false,
  },
});

const experienceSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: false,
  },
  description: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
  },
});

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  additionalLink: {
    type: String,
    required: false,
  },
  description: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
  },
});

const skillSchema = new Schema({
  skillHeading: {
    type: String,
    required: false,
  },
  skill: {
    type: String,
    required: false,
  },
});

const certificationSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  description: {
    type: [
      {
        type: String,
        required: false,
      },
    ],
    required: true,
  },
});

const resumeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    heading: {
      type: headerSchema,
      required: false,
    },
    education: {
      type: [educationSchema],
      required: false,
    },
    experience: {
      type: [experienceSchema],
      required: false,
    },
    projects: {
      type: [projectSchema],
      required: false,
    },
    skills: {
      type: [skillSchema],
      required: false,
    },
    certifications: {
      type: [certificationSchema],
      required: false,
    },
    latexCode: {
      type: String,
      required: false,
    },
    order: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);
