import React from "react";

const Banner2 = function (props) {
  return (
    <div className="slider-item">
      <div className="wrapper-img">
        <img src={props.baners2_1.imgUrl} alt="img" />
      </div>
      <div className="wrap-text">
        <h3>{props.baners2_1.h2}</h3>
      </div>
    </div>
  );
};
export default Banner2;
