import React, { useEffect, useState } from "react";
import { fetchResourceApi } from "../../services/resource-api";

const HtmlVideo = ({ courseId }) => {
  const [video, setVideo] = useState("");

  const getVideo = async () => {
    try {
      const response = await fetchResourceApi(courseId);
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
    
      <div className="w-full aspect-video">
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
          style={{height:'100%'}}
        ></iframe>
      </div>
   
  );
};

export default HtmlVideo;
