import React from 'react';


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
        <ContactSocial contactSocial={contactSocial}  />
    )
}
export default HeaderSocial;