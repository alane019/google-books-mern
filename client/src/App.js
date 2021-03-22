import React, { Component } from "react";
import logo from "../public/books-512.png";
import "./App.css";
import PageHeading from "components/PageHeading"
function App() {
  return (
    <div className="App">
      <PageHeading />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Explore and Save Lists of Google Books Results</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
