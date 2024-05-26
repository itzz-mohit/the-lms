import axios from "axios";
const URL = "http://localhost:5000/api/v1";

export const getValidityApi = async (userId, courseId) => {
  try {
    const response = await axios.get(
      `${URL}/validity/${userId}?courseId=${courseId}`
    );
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getting validities API");
    console.log(error);
  }
};

export const updateValidityApi = async (userId, courseId) => {
  try {
    const response = await axios.put(`${URL}/validity/${userId}`, {
      courseId,
      assignment: false,
    });
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling  update validities API");
    console.log(error);
  }
};
