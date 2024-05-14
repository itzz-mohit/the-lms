import axios from "axios";
const URL = "http://localhost:5000/api/v1";

//fetch all course card
export const courseCardApi = async () => {
  try {
    const response = await axios.get(`${URL}/courses`);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error while calling getcourses API");
  }
};

//update course rating
export const updateCourseRating = async (courseId, data) => {
  try {
    const response = await axios.put(`${URL}/courses/${courseId}/rating`, data);
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error while calling updatecourses API");
  }
};

//update favorite course
export const favoriteCourse = async (courseId) => {
  try {
    const response = await axios.put(`${URL}/courses/${courseId}/favorite`);
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error while calling favoriteCours API");
  }
};

//getAllFavoriteCourses
export const getFavoriteCourses = async () => {
  try {
    const response = await axios.get(`${URL}/courses/favorites`);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error while calling getfavoritecourses API");
  }
};
