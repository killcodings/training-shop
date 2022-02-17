import React from "react";
import "./style.css";

function Advantage(props) {
  const advantageItem = props.advantageItem;
  const listAdvant = advantageItem.map((item, index) => (
    <article key={index} className="advantage">
      <div className="wrapper-img">
        <img src={item.imgUrl} alt="img" />
      </div>
      <div className="info-advantage">
        <p className="tag_p">{item.p}</p>
        <h2 className="title">{item.h2}</h2>
      </div>
    </article>
  ));
  return <div className="wrap-advantages">{listAdvant}</div>;
}

const Advantages = function (props) {
  return (
    <div className="container">
      <Advantage advantageItem={props.advantageItem} />;
    </div>
  );
};
export default Advantages;
