import React from 'react';




const links = [
    {href: "#",  text: "About Us"},
    {href: "#",  text: "Women"},
    {href: "#",  text: "Men"},
    {href: "#",  text: "Beauty"},
    {href: "#",  text: "Accessories"},
    {href: "#",  text: "Blog"},
    {href: "#",  text: "Contact"}

]

function Links(props) {
    const links = props.links;
    const listItems = links.map((link, index) =>
         <li key={index}><a href={link.href}>{link.text}</a></li>
    );
    return (
        <ul className="main-menu">{listItems}</ul>
    );
}
const Menu = function () {
    return(
        <Links links={links} />
    )
}

export default Menu;