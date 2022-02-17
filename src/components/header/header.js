import React from "react";
import HeaderContact from "./contact";
import HeaderSocial from "./socialNetwork";
import Menu from "./menu";
import BlockNavs from "./BlockNavs";
import "./style.css";
import { Link } from "react-router-dom";

import Logo from "./CleverShop.svg";

const Header = function () {
  return (
    <header className="header">
      <div className="topLine ">
        <div className="container ">
          <div className="row">
            <HeaderContact />
            <HeaderSocial />
          </div>
        </div>
      </div>
      <div className="container bottomLine">
        <div className="row">
          <div className="logoWrap">
            <Link to="/">
              <img src={Logo} alt="img" />
            </Link>
          </div>

          <div className="menuWrap">
            <Menu />
          </div>

          <div className="NavsWrap">
            <BlockNavs />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
