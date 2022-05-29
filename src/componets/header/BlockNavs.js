import React from 'react';


const navs = [
    {href: "#", imgLink: require("./search.png"), alt: "img"},
    {href: "#", imgLink: require("./world.png"), alt: "img"},
    {href: "#", imgLink: require("./user.png"), alt: "img"},
    {href: "#", imgLink: require("./cart.png"), alt: "img", num:"2"}
]

function HeaderNav(props) {
    const navs = props.navs;
    const listItems = navs.map((link, index) => {
        return <a key={index} href={link.href}><img src={link.imgLink} alt={link.alt} /> {typeof link.num !== 'undefined'? <div className="count">{link.num}</div>  : false}</a>
    });
    return (
        <ul className="lists-nav">{listItems}</ul>
    );
}
const HeaderNavs= function (){
    return(
        <HeaderNav navs={navs}  />
    )
}
export default HeaderNavs;