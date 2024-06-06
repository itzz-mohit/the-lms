import React from "react";
import { Line } from "rc-progress";
import { Tooltip } from "antd";

const CardProgressBar = ({ percent,courseCompleted }) => {
  // console.log(percent);
  // console.log(courseCompleted)
  const coursePercent = courseCompleted ? 100 : percent;
  return (
    <div className=" flex justify-between items-center gap-3">
      <Tooltip title={`${percent}%`} color="black">
        <Line
          percent={coursePercent}
          strokeWidth={1}
          strokeColor="#000000"
          trailColor="#C0C0C0"
          strokeLinecap="round"
          className="cursor-pointer ps-4 "
        />
      </Tooltip>
      <div className="text-xs font-semibold text-gray-700 pe-3">{coursePercent}%</div>
    </div>
  );
};

export default CardProgressBar;
