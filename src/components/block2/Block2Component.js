import React from "react";
import "./style.css";
import CardsWrap from "./cards";
import CloseNavComponent from "./closeNav";

const Block2Component = function (props) {
  return (
    <div
      className="container block2 clothes"
      data-test-id={`footer-nav-link-${props.name}`}
    >
      <CloseNavComponent name={props.name} />

      <CardsWrap name={props.name} products={props.products} />
      <a href="#block2" className="see-all-card">
        SEE ALL
      </a>
    </div>
  );
};
export default Block2Component;
