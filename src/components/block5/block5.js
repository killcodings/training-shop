import React from "react";
import "./style.css";
import Block5top from "./block5-top";
import Card from "./card";

const card1 = {
  imgUrl: require("./b5-1.jpg"),
  h3: "The Easiest Way to Break",
  p: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
};
const card2 = {
  imgUrl: require("./b5-2.jpg"),
  h3: "Wedding Season",
  p: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
};

const Block5Component = function () {
  return (
    <div className="container">
      <div className="wrap-block">
        <Block5top />
        <div className="wrap-cards">
          <Card card={card1} />
          <Card card={card2} />
          <Card
            card={{
              imgUrl: require("./b5-3.jpg"),
              h3: "Recent Favorites On Repeat",
              p: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Block5Component;
