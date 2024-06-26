const quizModel = require("../models/quiz-model");
const courseModel = require("../models/course-model");

//CREATE QUIZ

exports.addQuiz = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { questions } = req.body;

    const response = await courseModel.findById({ _id: courseId });
    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }

    const quizDocuments = questions.map((question) => ({
      courseId,
      question: question.question,
      options: question.options,
      answer: question.answer,
    }));

    const quizData = await quizModel.insertMany(quizDocuments);
    res.status(201).json({
      success: true,
      response: quizData,
      message: "Quiz added successfully",
    });
  } catch (error) {
    console.log("Error while adding quiz");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//DELETE QUIZ

exports.deleteQuiz = async (req, res) => {
  try {
    const { courseId } = req.params;

    const response = await courseModel.findById({ _id: courseId });
    if (!response) {
      return res.status(400).json({ error: "Course not exists." });
    }

    const deletedData = await quizModel.deleteMany({
      courseId: courseId,
    });

    res.status(201).json({
      success: true,
      response: deletedData,
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    console.log("Error while deleting quiz");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

// GET QUIZ

exports.getQuiz = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await courseModel.findById({ _id: courseId });
    if (!course) {
      return res.status(400).json({ error: "Course not exists." });
    }

    const quiz = await quizModel.find({ courseId: courseId });

    res.status(200).json({
      success: true,
      response: quiz,
      message: "Quiz fetched successfully",
    });
  } catch (error) {
    console.error("Error while getting quizzes:", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//UPDATE QUIZ
exports.updateQuiz = async (req, res) => {
  try {
    const { courseId } = req.params;

    const updatedQuiz = await quizModel.updateMany(
      { courseId: courseId },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      response: updatedQuiz,
      message: "Quiz updated successfully",
    });
  } catch (error) {
    console.error("Error while editing quiz:", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};
