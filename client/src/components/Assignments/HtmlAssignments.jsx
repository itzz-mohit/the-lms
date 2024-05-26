import { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { getAssignmentQuestionsApi } from "../../services/assignment-api";
import { writeAssignmentAnswerApi } from "../../services/response-api";
import { useSelector } from "react-redux";
import { getValidityApi, updateValidityApi } from "../../services/validity-api";

export default function HtmlAssignments({ courseId }) {
  const [assignmentDone, setAssignmentDone] = useState(false);
  const editorRef = useRef(null);
  //console.log(courseId);

  const { userData } = useSelector((state) => state.auth);
  const userId = userData._id;

  const [assignmentAnswer, setAssignmentAnswer] = useState("");
  const [assignmentQuestion, setAssignmentQuestion] = useState("");

  const checkValidity = async () => {
    try {
      const response = await getValidityApi(userId, courseId);
      setAssignmentDone(response.data.assignment);
      // console.log(assignmentDone);
      // console.log(response);
    } catch (error) {
      console.log("Error while getting the validity");
      console.error(error);
    }
  };
  const log = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent({ format: "text" });
      setAssignmentAnswer(content);
      try {
        const response = await writeAssignmentAnswerApi(
          courseId,
          userId,
          content,
          assignmentQuestion
        );
        //console.log(response);
        if (response.success) {
          try {
            const response = await updateValidityApi(userId, courseId);
            //console.log(response);
            if (response.success) {
              setAssignmentDone(response.data.assignment);
            }
          } catch (error) {
            console.log("Error while updating the validity");
            console.error(error);
          }
        }
      } catch (error) {
        console.log("Error while writing the assignment");
        console.error(error);
      }
    }
  };
  //console.log(assignmentAnswer);

  useEffect(() => {
    checkValidity();
    getAssignmentQuestions(courseId);
  }, [courseId]);

  const getAssignmentQuestions = async (courseId) => {
    try {
      const response = await getAssignmentQuestionsApi(courseId);
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data[0].question);
      setAssignmentQuestion(response.data[0].question);
    } catch (error) {
      console.log("Error while getting the assignment questions");
      console.error(error);
    }
  };
  return (
    <div className="bg-white shadow-lg">
      {assignmentDone ? (
        <>
          <div className="px-6 mt-5">
            <h1 className="text-2xl mb-4 text-slate-600">
              {assignmentQuestion}
            </h1>
          </div>
          <div className="p-5 ">
            <Editor
              apiKey="zpchvvwstp4brqyobhn3y9pz99tkpn13y8rhix0ndp4f6kgz"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              // initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                branding: false,
              }}
            />
            <div className="flex items-end justify-end p-4">
              <button
                onClick={log}
                className="bg-cyan-800 hover:bg-cyan-900 text-white font-semibold py-2 px-4 rounded shadow-lg hover:shadow transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-40 h-screen bg-white shadow-xl">
          <h1 className="mt-3 text-2xl text-gray-500">
            Thank You, for submitting the assignment!!
          </h1>
        </div>
      )}
    </div>
  );
}
