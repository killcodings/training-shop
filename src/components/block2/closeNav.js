import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const navscl = [
  { title: "NEW ARRIVALS", href: "#" },
  { title: "SPECIALS", href: "#" },
  { title: "BESTSELLERS", href: "#" },
  { title: "MOST VIEWED", href: "#" },
  { title: "FEATURED PRODUCTS", href: "#" },
];

function NavsClose(props) {
  const navscl = props.navscl;
  const listLinkClose = navscl.map((link, index) => (
    <li key={index}>
      <Link to={link.href} className="card">
        {link.title}
      </Link>
    </li>
  ));
  return <ul className="wrap-link">{listLinkClose}</ul>;
}

const CloseNavComponent = function (props) {
  return (
    <div className="top-closes">
      <h2>{props.name}</h2>
      <NavsClose navscl={navscl} />
    </div>
  );
};
export default CloseNavComponent;
