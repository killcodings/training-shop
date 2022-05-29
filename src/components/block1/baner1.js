import React from "react";
import "./style.css";
const baners = [
  { imgUrl: require("./b1.jpg"), text: "BANNER", h2: "YOUR TITLE TEXT" },
];

function Baners(props) {
  const baners = props.baners;
  const listItems = baners.map((baner, index) => (
    <div key={index} className="slider-item">
      <div className="wrapper-img">
        <img src={baner.imgUrl} alt="img" />
      </div>
      <div className="wrap-text">
        <p>{baner.text}</p>
        <h3>{baner.h2}</h3>
      </div>
    </div>
  ));
  return <div className="slider">{listItems}</div>;
}

const Baner1 = function () {
  return <Baners baners={baners} />;
};
export default Baner1;
