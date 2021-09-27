import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    // console.log(barFillHeight);
  }
  // console.log(barFillHeight);
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div
          className="progress my-1 "
          style={{ height: "20px", width: "50%" }}
        >
          <b>{props.label}</b>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-success fw-bolder"
            role="progressbar"
            aria-valuenow={barFillHeight}
            aria-valuemin="0"
            aria-valuemax={props.maxValue}
            style={{ width: barFillHeight }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default ChartBar;
