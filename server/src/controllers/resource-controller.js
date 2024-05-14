const resourceModel = require("../models/resource-model");
const courseModel = require("../models/course-model");

//ADD Resources

exports.addResources = async (req, res) => {
  try {
    const { id } = req.params;
    const { pdf, ppt, video } = req.body;
    const response = await courseModel.findById({ _id: id });

    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }

    const data = await resourceModel.create({
      courseId: id,
      pdf,
      ppt,
      video,
    });

    console.log(data);
    res.status(201).json({
      success: true,
      response: data,
      message: "Resource added successfully",
    });
  } catch (error) {
    console.log("Error while adding resources");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//GET PDF

exports.getResources = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await resourceModel.findById({ courseId: id });
    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }
    console.log(response);
    res.status(201).json({
      success: true,
      data: response,
      message: "Resource added successfully",
    });
  } catch (error) {
    console.log("Error while getting pdf ");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};
