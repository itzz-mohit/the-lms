const courseModel = require("../models/course-model");
const cardModel = require("../models/course-model");
const paymentModel = require("../models/payment-model");
const validityModel = require("../models/validity-model");

//ADD Courses
exports.addCourses = async (req, res) => {
  try {
    const { title, description, rating, image, favorite } = req.body;

    //find duplicate course
    const findTitle = await cardModel.findOne({ title });
    if (findTitle) {
      return res.status(400).json({ error: "Course already exists." });
    }

    const response = await cardModel.create({
      title,
      description,
      rating,
      image,
      favorite,
    });
    console.log("Course added successfully");

    res.status(201).json({
      success: true,
      data: response,
      message: "Course added successfully",
    });
  } catch (error) {
    console.log("Error while adding courses");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//GET Courses
exports.getCourses = async (req, res) => {
  try {
    const courseData = await cardModel.find({});

    res.status(200).json({
      success: true,
      data: courseData,
      message: "Entire data fetched",
    });
  } catch (error) {
    console.log("Error while fetching courses");
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal Server Error",
    });
  }
};

//UPDATE Rating
exports.updateRating = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { rating } = req.body;

    // Find the course by ID
    const course = await cardModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Update the rating of the course
    course.rating = rating;
    await course.save();

    res.status(200).json({
      success: true,
      data: course,
      message: "Course rating updated successfully",
    });
  } catch (error) {
    console.error("Error while updating course rating:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

//ADD REMOVE FAVORITE Course
exports.favoriteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await courseModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    course.favorite = !course.favorite;
    await course.save();

    res.status(200).json({
      success: true,
      data: course,
      message: `Course marked as ${
        course.favorite ? "favorite" : "not favorite"
      } successfully`,
    });
  } catch (error) {
    console.error("Error while adding the course to favorite: ", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

//GET FAVORITE Course

exports.getFavoriteCourses = async (req, res) => {
  try {
    const course = await courseModel.find({ favorite: true });

    if (!course) {
      return res.status(404).json({ error: "No favorite courses found" });
    }

    res.status(200).json({
      success: true,
      data: course,
      message: "All favorite courses fetched",
    });
  } catch (error) {
    console.error("Error while fetching the favorite course: ", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

//Get all courses of user

exports.getUserDashboardCourses = async (req, res) => {
  try {
    const { userId } = req.params;

    const response = await paymentModel.find({ userId: userId });

    // Extract unique course IDs from payment records
    const courseIds = [...new Set(response.map((record) => record.courseId))];

    // Fetch course details for each course ID
    const courses = await courseModel.find({ _id: { $in: courseIds } });

    // Fetch all the validities for the progress bar
    const validity = await validityModel.find({
      userId: userId,
      courseId: { $in: courseIds },
    });

    // console.log(validity);

    res
      .status(200)
      .json({ data: courses, count: courses.length, validities: validity });
  } catch (error) {
    console.error("Error while fetching the user dashboard course: ", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

//GET COURSE BY ID
exports.getCoursesById = async (req, res) => {
  try {
    const { courseId } = req.params;

    const response = await courseModel.findById({ _id: courseId });
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("Error while fetching the course by Id: ", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

// Get progress courses

exports.getInProgressCourses = async (req, res) => {
  try {
    const { userId } = req.params;

    const response = await validityModel.find({
      userId: userId,
      $or: [{ feedback: true }, { assignment: true }, { quiz: true }],
    });

    const courseIds = [...new Set(response.map((record) => record.courseId))];

    const courses = await courseModel.find({ _id: { $in: courseIds } });

    // Fetch all the validities for the progress bar
    const validity = await validityModel.find({
      userId: userId,
      courseId: { $in: courseIds },
    });

    res
      .status(200)
      .json({ data: courses, count: courses.length, validities: validity });
  } catch (error) {
    console.error("Error while fetching the in progress courses: ", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

//get completed course
exports.getCompletedCourses = async (req, res) => {
  try {
    const { userId } = req.params;

    const response = await validityModel.find({
      userId: userId,
      feedback: false,
      assignment: false,
      quiz: false,
    });

    const courseIds = [...new Set(response.map((record) => record.courseId))];

    const courses = await courseModel.find({ _id: { $in: courseIds } });

    // Fetch all the validities for the progress bar
    const validity = await validityModel.find({
      userId: userId,
      courseId: { $in: courseIds },
    });

    res
      .status(200)
      .json({ data: courses, count: courses.length, validities: validity });
  } catch (error) {
    console.error("Error while fetching the completed courses: ", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};
