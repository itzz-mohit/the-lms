const feedbackModel = require("../models/feedback-model");

// add the user feedbacks
exports.addFeedback = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, message } = req.body;

    const response = await feedbackModel.create({ userId, username, message });
    res.status(200).json({
      success: true,
      data: response,
      message: "Feedback successfully sent",
    });
  } catch (error) {
    console.log("Error occurred while posting feedback");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
