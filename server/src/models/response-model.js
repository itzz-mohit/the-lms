const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  assignmentquestion: {
    type: String,
    required: true,
  },
  assignmentanswer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Response", responseSchema);
