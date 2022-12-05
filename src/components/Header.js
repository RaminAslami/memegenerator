import React from "react";
import logo2 from "../Trollface_non-free.png";

function Header() {
  return (
    <nav className="nav">
      <img src={logo2} alt="" className="troll-logo" />
      <h3>MemeGenerator</h3>
    </nav>
  );
}

export default Header;
