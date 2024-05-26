import axios from "axios";
const URL = "http://localhost:5000/api/v1";

export const writeAssignmentAnswerApi = async (
  courseId,
  userId,
  content,
  assignmentQuestion
) => {
  try {
    const respone = await axios.post(`${URL}/assignment/response/${userId}`, {
      courseId,
      assignmentquestion: assignmentQuestion,
      assignmentanswer: content,
    });
    // console.log(respone);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log("Error while calling get assignment questions API");
    console.log(error);
  }
};
