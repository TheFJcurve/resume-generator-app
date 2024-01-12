const getAllResumes = async (req, res) => {
  res.send("Sending a request to get all resumes");
};

const getResume = async (req, res) => {
  res.send("Sending a request to get resume with the id: " + req.params.id);
};

const createResume = async (req, res) => {
  res.send("Sending a request to create a resume");
};

const deleteResume = async (req, res) => {
  res.send("Sending a request to delete resume with the id: " + req.params.id);
};

const updateResume = async (req, res) => {
  res.send("Sending a request to update resume with the id: " + req.params.id);
};

module.exports = {
  getAllResumes,
  getResume,
  createResume,
  deleteResume,
  updateResume,
};
