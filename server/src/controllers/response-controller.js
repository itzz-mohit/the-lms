const responseModel = require("../models/response-model");

//add the answer of the assignment
exports.writeAssignmentAnswer = async (req, res) => {
  try {
    const { userId } = req.params;
    const { courseId, assignmentquestion, assignmentanswer } = req.body;
    const response = await responseModel.create({
      userId,
      courseId,
      assignmentquestion,
      assignmentanswer,
    });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error occurred while writting assignment answer");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
