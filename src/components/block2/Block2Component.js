import React from "react";
import "./style.css";
import CardsWrap from "./cards";
import CloseNavComponent from "./closeNav";

const Block2Component = function (props) {
  return (
    <div className="container block2">
      <CloseNavComponent name={props.name} />
      <CardsWrap products={props.products} />
      <a href="#" className="see-all-card">
        SEE ALL
      </a>
    </div>
  );
};
export default Block2Component;
