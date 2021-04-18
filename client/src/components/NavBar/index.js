import React from "react";
import "./style.css";

function NavTabs() {


  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/search"> Search</a></li>
      <li className="nav-item">
        <a href="/saved"> Saved</a>
      </li>
    </ul>
  );
}

export default NavTabs;
