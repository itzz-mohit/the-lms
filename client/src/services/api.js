import axios from "axios";
const URL = "http://localhost:5000/api/v1";

export const registerApi = async (data) => {
  try {
    const respone = await axios.post(`${URL}/register`, data);
    // console.log(respone);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log("Error while calling register API");
    console.log(error);
    throw error.response.data.errorCode;
  }
};

export const loginApi = async (data) => {
  try {
    const respone = await axios.post(`${URL}/login`, data);
    // console.log(respone);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log("Error while calling login API");
    console.log(error);
    throw error.response.data.errorCode;
  }
};
