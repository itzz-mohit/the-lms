const mongoose = require("mongoose");

const resourceScehma = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    pdf: {
      type: String,
      required: true,
    },
    ppt: {
      type: String,
      required: true, 
    },
    video: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resource", resourceScehma);
