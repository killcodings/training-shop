import React from "react";
import "./style.css";

function News(props) {
  const items = props.items;
  const listNews = items.map((item, index) => (
    <a key={index} href={item.href} className="news">
      <img src={item.imgUrl} alt="img" />
      <div className="wrap-text">
        <p className="tag_p">{item.p}</p>
        <h3 className="title">
          {item.h2}&nbsp;<span className="span-color">{item.span}</span>
        </h3>
      </div>
    </a>
  ));
  return <div className="wrap-news">{listNews}</div>;
}

const NewsComponent = function (props) {
  // console.log(props.items);
  return <News items={props.items} />;
};
export default NewsComponent;
