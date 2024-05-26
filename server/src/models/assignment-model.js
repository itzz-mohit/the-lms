const mongoose = require("mongoose");

const assginmentSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Assignment", assginmentSchema);
