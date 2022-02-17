import React from "react";

import Block2Component from "../block2/Block2Component";

const cards = [
  {
    href: "",
    imgUrl: require("../block2/Rectangle1.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "",
    imgUrl: require("../block2/Rectangle2.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "",
    imgUrl: require("../block2//Rectangle3.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "4",
  },
  {
    href: "",
    imgUrl: require("../block2//Rectangle4.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "",
    imgUrl: require("../block2//Rectangle5.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "",
    imgUrl: require("../block2//Rectangle6.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "",
    imgUrl: require("../block2//Rectangle7.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "",
    imgUrl: require("../block2//Rectangle8.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
];
const Men = function (props) {
  return (
    <div className="container products-page" data-test-id={`products-page-men`}>
      <Block2Component name="MEN" products={cards} />
    </div>
  );
};
export default Men;
