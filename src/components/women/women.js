import React from "react";

import Block2Component from "../block2/Block2Component";
const cards = [
  {
    href: "women",
    imgUrl: require("../block2/Rectangle1.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "women",
    imgUrl: require("../block2/Rectangle2.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "5",
  },
  {
    href: "women",
    imgUrl: require("../block2//Rectangle3.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "4",
  },
  {
    href: "women",
    imgUrl: require("../block2//Rectangle4.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "women",
    imgUrl: require("../block2//Rectangle5.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "women",
    imgUrl: require("../block2//Rectangle6.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "women",
    imgUrl: require("../block2//Rectangle7.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
  {
    href: "women",
    imgUrl: require("../block2//Rectangle8.jpg"),
    h3: "Women's tracksuit Q109",
    price: "$ 30.00",
    rating: "3",
  },
];
const Women = function (props) {
  console.log(cards[0].href);
  return (
    <div
      className="container products-page"
      data-test-id={`products-page-women`}
    >
      <Block2Component name="WOMEN’S" products={cards} />
    </div>
  );
};
export default Women;
