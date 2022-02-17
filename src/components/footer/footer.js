import React from "react";
// import HeaderContact from "./contact";
// import HeaderSocial from "./socialNetwork";
// import Menu from "./menu";
// import BlockNavs from "./BlockNavs";
import "./style.css";
import TopFooter from "../footer/top-footer";
import FooterMenu from "../footer/footer-menu";

const Footer = function (props) {
  return (
    <footer className="footer" data-test-id="footer">
      <TopFooter />
      <div className="container">
        <div className="wrap-footer">
          <FooterMenu name={props.name} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
