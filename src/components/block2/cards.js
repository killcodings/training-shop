import React from "react";
import { Link } from "react-router-dom";
import Star from "./star.png";
import StarNull from "./starNull.png";
import "./style.css";

function Rating(props) {
  let countRating = [];
  for (let index = 0; index < 5; index++) {
    if (index + 1 <= props.reting) {
      countRating.push(<img key={index} src={Star} alt="1" />);
    } else {
      countRating.push(<img key={index} src={StarNull} alt="0" />);
    }
  }
  // console.log(props.reting);
  return <div className="rating">{countRating}</div>;
}

function Cards(props) {
  const cards = props.cards;
  const listCards = cards.map((card, index) => (
    <Link key={index} to={`${card.href}/${index}`} className="card">
      <img src={card.imgUrl} alt="img" />
      <h3 className="title">{card.h3}</h3>
      <div className="card-bottom">
        <div className="price">
          <p>{card.price}</p>
        </div>
        <Rating reting={card.rating} />
      </div>
    </Link>
  ));
  return <div className="wrap-cards">{listCards}</div>;
}

const CardsWrap = function (props) {
  return <Cards cards={props.products} />;
};
export default CardsWrap;
