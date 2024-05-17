import React, { useEffect, useState } from "react";
import { fetchResourceApi } from "../../services/resource-api";

const HtmlVideo = ({ courseId }) => {
  //console.log(courseId);
  const [video, setVideo] = useState("");

  const getVideo = async () => {
    try {
      const response = await fetchResourceApi(courseId);
      console.log(response);
      console.log(response.data.video);
      setVideo(response.data.video);
    } catch (error) {
      console.log("Error while getting videos");
      console.error(error);
    }
  };

  useEffect(() => {
    if (courseId) {
      getVideo();
    }
  }, [courseId]);

  return (
    <div className="bg-gray-100">
      <div className="w-full  aspect-video">
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default HtmlVideo;
