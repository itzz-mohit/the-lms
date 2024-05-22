const mongoose = require("mongoose");
const validitySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    quiz: {
      type: Boolean,
      default: true,
    },
    assignment: {
      type: Boolean,
      default: true,
    },
    feedback: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("validity", validitySchema);
