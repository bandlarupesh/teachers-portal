import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* <span className="header-symbol"></span> */}
      <span className="header-text">
        <span className="vip-text">VIP</span>
        <span className="cam-girls">CamGirls</span>
      </span>
      <span className="btns">
      <button className="btn login">Login</button>
      <button className="btn1 sign-up">Sign UP</button>
      </span>
    </div>
  );
}

export default Header;
