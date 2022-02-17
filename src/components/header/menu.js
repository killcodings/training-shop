import React from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "/test", text: "About Us" },
  { href: "/women", text: "Women" },
  { href: "/men", text: "Men" },
  { href: "#", text: "Beauty" },
  { href: "#", text: "Accessories" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Contact" },
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
const Menu = function () {
  return (
    <div>
      <Links links={links} />
    </div>
  );
};

export default Menu;
