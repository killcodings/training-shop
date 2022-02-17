import React from "react";
import "./style.css";
import Baner1 from "./baner1";
import Banner2 from "./banner2";

const baners2_1 = { imgUrl: require("./b2-1.jpg"), h2: "WOMEN" };
const baners2_2 = { imgUrl: require("./b2-2.jpg"), h2: "MEN" };
//const baners2_3 = { imgUrl: require("./b2-3.jpg"), h2: "ACCESSORIES" };

const Block1Component = function () {
  return (
    <div className="container">
      <div className="wrap-banner">
        <Baner1 />
        <div className="wrap-slider">
          <Banner2 baners2_1={baners2_1} />
          <Banner2 baners2_1={baners2_2} />
          <Banner2
            baners2_1={{ imgUrl: require("./b2-3.jpg"), h2: "ACCESSORIE2S" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Block1Component;
