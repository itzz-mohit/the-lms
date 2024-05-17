import axios from "axios";
const URL = "http://localhost:5000/api/v1";

//fetch all quiz questions

export const getQuizApi = async (courseId) => {
  console.log(courseId);
  try {
    const response = await axios.get(`${URL}/quiz/${courseId}`);
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error while calling get quiz API");
  }
};
