import React, { Component } from "react";
import logo from "./books-512.png";
import "./App.css";
import PageHeading from "./components/PageHeading";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <PageHeading />
      <Form />
      <div className="App-header">
        <img src={logo} className="App-logo" id="top" alt="logo" />
        <h2>Explore and Save Lists of Google Books Results</h2>
      </div>
    </div>
  );
}


export default App;
