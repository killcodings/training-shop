import React from 'react';
import './style.css';

const contactSocial = [
    {href: "#", imgLink: require("./facebook.png"), alt: "img"},
    {href: "#", imgLink: require("./facebook.png"), alt: "img"},
    {href: "#", imgLink: require("./facebook.png"), alt: "img"},
    {href: "#", imgLink: require("./facebook.png"), alt: "img"}
]

function ContactSocial(props) {
    const contactSocial = props.contactSocial;
    const listItems = contactSocial.map((link, index) => {
        return <a key={index} href={link.href}><img src={link.imgLink} alt={link.alt} /></a>
    });
    return (
        <ul>{listItems}</ul>
    );
}
const HeaderSocial= function (){
    return(
        <div className="topLine">
            <div className="container">
                <ContactSocial contactItems={contactSocial}  />
            </div>
        </div>
    )
}
export default HeaderSocial;