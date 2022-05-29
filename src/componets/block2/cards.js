import React from 'react';
import './style.css';
const cards = [
    {href: "#", imgUrl: require("./Rectangle1.jpg"), h3:"Women's tracksuit Q109", price: "$ 30.00", rating: "Alick, сделай рейтинг!"},
    {href: "#", imgUrl: require("./Rectangle2.jpg"), h3:"Women's tracksuit Q109", price: "$ 30.00", rating: "И следующий блок Men"},
    {href: "#", imgUrl: require("./Rectangle3.jpg"), h3:"Women's tracksuit Q109", price: "$ 30.00", rating: "4"},
    {href: "#", imgUrl: require("./Rectangle4.jpg"), h3:"Women's tracksuit Q109", price: "$ 30.00", rating: "4"}
]

function Cards(props) {
    const cards = props.cards;
    const listCards = cards.map((card, index) =>
        <a key={index} href={card.href}  className="card">
            <img src={card.imgUrl} alt="img"/>
            <h3 className="title">{card.h3}</h3>
            <div className="card-bottom">
                <div className="price">
                    <p>{card.price}</p>
                </div>
                <div className="rating">
                    {card.rating}
                </div>
            </div>
        </a>
    );
    return (
        <div className="wrap-cards">
            {listCards}
        </div>
    );
}

const CardsWrap = function (props) {
    return (<Cards cards={cards}/>)
}
export default CardsWrap;