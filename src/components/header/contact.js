import React from 'react';


const contactItems= [
    {text:"+375 29 100 20 30", imgSrc: require("./phoneIcon.png")},
    {text:"Belarus, Gomel, Lange 17",imgSrc: require("./dot.png")},
    {text:"All week 24/7",imgSrc: require("./clock.png")}

]

function ContactInfo(props) {
    const contactItems = props.contactItems;
    const listItems = contactItems.map((contact, index) => {
        return <li key={ index }><img src={contact.imgSrc} alt={contact.text} /><span>{contact.text}</span></li>
    });
    return (
        <ul>{listItems}</ul>
    );
}
const HeaderContact= function (){
    return(
        <ContactInfo contactItems={contactItems}  />
    )
}
export default HeaderContact;