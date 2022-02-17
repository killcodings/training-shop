import React from "react";
import { Link } from "react-router-dom";

const links1 = [
  { href: "/test", text: "About Us" },
  { href: "#", text: "Women" },
  { href: "#", text: "Men" },
  { href: "#", text: "Beauty" },
];

function Links(props) {
  const links = props.links;
  const listItems = links.map((link, index) => (
    <li key={index}>
      <Link to={link.href}>{link.text}</Link>
    </li>
  ));
  return <ul className="main-menu">{listItems}</ul>;
}
const FooterMenu = function (props) {
  return (
    <div className="footer-item">
      <div className="footer-item__wrap">
        <h2>{props.name}</h2>
        <Links links={links1} />
      </div>
    </div>
  );
};

export default FooterMenu;
