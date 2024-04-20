import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function HtmlAssignments() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent({ format: "text" }));
    }
  };
  return (
    <div className="p-5 shadow-lg">
      <Editor
        apiKey="zpchvvwstp4brqyobhn3y9pz99tkpn13y8rhix0ndp4f6kgz"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
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
  );
}
