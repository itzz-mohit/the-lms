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

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/addcourses", addCourses);
router.get("/getcourses", getCourses);
router.put("/updaterating/:courseId", updateRating);
router.put("/favorite/:courseId", favoriteCourse);
router.get("/getfavoritecourses", getFavoriteCourses);

module.exports = router;
