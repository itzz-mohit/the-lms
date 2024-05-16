import axios from "axios";
const URL = "http://localhost:5000/api/v1";

// Fetch all resources
export const fetchResourceApi = async (courseId) => {
  //console.log(courseId); 
  try {
    const response = await axios.get(`${URL}/resources/${courseId}`);

    return response.data;
  } catch (error) {
    console.error(error);
    console.log("Error while calling get resource API");
    throw error;
  }
};
