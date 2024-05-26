const assignmentModel = require("../models/assignment-model");
const assginmentModel = require("../models/assignment-model");

// add the questions
exports.addAssignment = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { question } = req.body;

    const data = await assignmentModel.create({ courseId, question });
    res.status(200).json({ success: true, response: data });
  } catch (error) {
    console.log("Error occurred while adding assignment");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get the questions
exports.getAssignment = async (req, res) => {
  try {
    const { courseId } = req.params;
    const response = await assignmentModel.find({ courseId });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error occurred while getting assignment");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// // add the answers to the questions
// exports.addAnswer = async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const response = await assignmentModel.updateOne({ courseId });
//     res.status(200).json({ success: true, data: response });
//   } catch (error) {
//     console.log("Error occurred while adding assignment answer");
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
