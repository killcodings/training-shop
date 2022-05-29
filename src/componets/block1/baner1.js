import React from 'react';
import './style.css';
const baners = [
    {imgUrl: "#", h2:"hi", text: "About Us"},



]

function Baners(props) {
    const baners = props.baners;
    const listItems = baners.map((baner, index) =>
        <div key={index}>
            <div>
                <img src={baner.imgUrl} alt=""/>
                <div>

                    <h3>{baner.h2}</h3>
                    <p>{baner.text}</p>
                </div>
            </div>
        </div>
    );
    return (
        <div className="slider">
            {listItems}
        </div>
    );
}

const Baner1 = function () {
    return (
        <div className="container">
            <div className="baner1">
                <Baners baners={baners}/>
            </div>
        </div>
    )
}
export default Baner1;