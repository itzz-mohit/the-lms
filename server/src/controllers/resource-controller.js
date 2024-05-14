const resourceModel = require("../models/resource-model");
const courseModel = require("../models/course-model");

//ADD RESOURCES

exports.addResources = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { pdf, ppt, video } = req.body;
    const response = await courseModel.findById({ _id: courseId });

    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }

    const data = await resourceModel.create({
      courseId: courseId,
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

//GET RESOURCES

exports.getResources = async (req, res) => {
  try {
    const { courseId } = req.params;

    const response = await resourceModel.findOne({ courseId: courseId });
    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }
    console.log(response);
    res.status(200).json({
      success: true,
      data: response,
      message: "Resource fetched successfully",
    });
  } catch (error) {
    console.log("Error while getting resource ");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//UPDATE RESOURCES
exports.updateResources = async (req, res) => {
  try {
    const { courseId } = req.params;
    const response = await resourceModel.findOne({ courseId: courseId });
    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }

    const updatedData = await resourceModel.findOneAndUpdate(
      { courseId: courseId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: updatedData,
      message: "Resource updated successfully",
    });
  } catch (error) {
    console.log("Error while updating resource ");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//DELETE RESOURCES

exports.deleteResources = async (req, res) => {
  try {
    const { courseId } = req.params;
    const response = await resourceModel.findOne({ courseId: courseId });
    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }
    const deletedData = await resourceModel.findOneAndDelete({
      courseId: courseId,
    });
    res.status(200).json({
      success: true,
      data: deletedData,
      message: "Resource deleted successfully",
    });
  } catch (error) {
    console.log("Error while deleting resource ");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};
