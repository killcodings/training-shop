import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const content = {
  h2: "BE IN TOUCH WITH US:",
  imgUrl1: require("./imgurl1.png"),
  imgUrl2: require("./imgurl2.png"),
  imgUrl3: require("./imgurl3.png"),
  imgUrl4: require("./imgurl4.png"),
};

const TopFooterLine = function (props) {
  return (
    <div className="container top-footer">
      <div className="footer-top__title">
        <h2 className="title">{props.content.h2}</h2>
      </div>
      <div className="wrap-form">
        <form className="form">
          <input
            type="email"
            name="your-email"
            className="input-email"
            placeholder="Enter your email"
          />
          <input type="submit" value="Join us" className="input-submit" />
        </form>
      </div>
      <div className="wrap-networks">
        <Link to="/Path">
          <img src={props.content.imgUrl1} alt="img" />
        </Link>
        <Link to="/Path">
          <img src={props.content.imgUrl2} alt="img" />
        </Link>
        <Link to="/Path">
          <img src={props.content.imgUrl3} alt="img" />
        </Link>
        <Link to="/Path">
          <img src={props.content.imgUrl4} alt="img" />
        </Link>
      </div>
    </div>
  );
};

const TopFooter = function () {
  return (
    <div className="footer-top__wrap">
      <TopFooterLine content={content} />
    </div>
  );
};
export default TopFooter;
