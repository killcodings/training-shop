import React from 'react';
import './style.css';
import CardsWrap from  './cards';
import CloseNavComponent from  './closeNav';


const Block2Component = function () {
    return (
        <div className="container wrap-block2">
            <CloseNavComponent name="WOMEN’S"/>
            <CardsWrap />
            <a href="#" className="see-all-card">SEE ALL</a>
        </div>
    )
}
export default Block2Component;