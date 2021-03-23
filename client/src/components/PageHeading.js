//Header component is rendered to the top of each page
import React from "react";
import logo from "../books-512.png";


function PageHeading() {
  return (

    <div style={{padding: 15}} className="App-Header container">
          <h1 style={{fontSize: 30, marginBottom: 0, padding: 10}} className="display-4">Google Books Data Explorer</h1>

          <img src={logo} className="App-logo" id="top" alt="logo" />
          <p>Explore and Save Lists of Google Books Results</p>

          <p style={{color:"gray", paddingLeft: 12, marginTop: 0}} className="lead">{
          (new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format())
          }</p>
        </div>
  );
}

export default PageHeading;
