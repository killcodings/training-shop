import React from "react";

const Card = function (props) {
  return (
    <div className="wrap-card">
      <div className="wrapper-img">
        <img src={props.card.imgUrl} alt="img" />
      </div>
      <div className="wrap-text">
        <h3>{props.card.h3}</h3>
        <p>{props.card.p}</p>
      </div>
    </div>
  );
};
export default Card;
