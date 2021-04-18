import "../../App.css";
import "./style.css";
import React from "react";

function NoMatch() {
  return (
    <div className="message-box container">
      <h1>404</h1>
      <p>Page not found</p>
        <div className="buttons-con">
            <div className="action-link-wrap">
            <a href="/" className="link-button">
                Return to home page
            </a>
            </div>
        </div>
    </div>
  );
}

export default NoMatch;
