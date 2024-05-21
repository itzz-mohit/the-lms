const express = require("express");
const router = express.Router();

const {
  doPayment,
  savePaymentData,
} = require("../controllers/payment-controller");

router.post("/payment", doPayment);
router.post("/payment/confirm", savePaymentData);

const { registerUser, loginUser } = require("../controllers/auth-controller");
const {
  addCourses,
  getCourses,
  updateRating,
  favoriteCourse,
  getFavoriteCourses,
  getUserDashboardCourses,
  getCoursesById,
} = require("../controllers/course-controller");

const {
  addResources,
  getResources,
  updateResources,
  deleteResources,
} = require("../controllers/resource-controller");

const {
  getQuiz,
  deleteQuiz,
  updateQuiz,
  addQuiz,
} = require("../controllers/quiz-controller");

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Course Routes
router.post("/admin/courses/add", addCourses);
router.get("/courses", getCourses);
router.put("/courses/:courseId/rating", updateRating);
router.put("/courses/:courseId/favorite", favoriteCourse);
router.get("/courses/favorites", getFavoriteCourses);
router.get("/courses/:userId", getUserDashboardCourses);
router.get("/course/:courseId", getCoursesById);

// Resources Routes
router.post("/admin/resources/:courseId", addResources);
router.put("/admin/resources/:courseId", updateResources);
router.delete("/admin/resources/:courseId", deleteResources);
router.get("/resources/:courseId", getResources);

// Quiz Routes
router.post("/admin/quiz/:courseId", addQuiz);
router.put("/admin/quiz/:courseId", updateQuiz);
router.delete("/admin/quiz/:courseId", deleteQuiz);
router.get("/quiz/:courseId", getQuiz);

module.exports = router;
