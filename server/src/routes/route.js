const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/auth-controller");
const {
  addCourses,
  getCourses,
  updateRating,
  favoriteCourse,
  getFavoriteCourses,
} = require("../controllers/course-controller");

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Course Routes
router.post("/admin/courses/add", addCourses);
router.get("/courses", getCourses);
router.put("/courses/:courseId/rating", updateRating);
router.put("/courses/:courseId/favorite", favoriteCourse);
router.get("/courses/favorites", getFavoriteCourses);
module.exports = router;
