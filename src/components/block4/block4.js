import React from "react";
import "./style.css";

const content = [
  {
    imgUrlGirl: require("./girl.png"),
    imgUrlMen: require("./men.png"),
    p: "Special offer",
    h2: `Subscribe and`,
    span: "get 10% Off",
  },
];
function СontentBlock(props) {
  const content = props.content;
  const offerItem = content.map((item, index) => (
    <div key={index} className="offer-item">
      <p className="tag_p">{item.p}</p>
      <div className="wrap-title">
        <h2 className="title">
          Subscribe and&nbsp;<span className="span-color">{item.span}</span>
        </h2>
      </div>
      <div className="wrap-form">
        <form className="form">
          <input
            type="email"
            name="your-email"
            className="input-email"
            placeholder="Enter your email"
          />
          <input type="submit" value="Subscribe" className="input-submit" />
        </form>
      </div>
    </div>
  ));
  return (
    <div className="offer">
      <div className="wrapper-img">
        <img src={content[0].imgUrlGirl} alt="img" />
      </div>
      {offerItem}
      <div className="wrapper-img">
        <img src={content[0].imgUrlMen} alt="img" />
      </div>
    </div>
  );
}

const Block4 = function () {
  return (
    <section className="block4">
      <div className="container">
        <СontentBlock content={content} />
      </div>
    </section>
  );
};
export default Block4;
