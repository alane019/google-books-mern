import React, { useState } from "react";
import api from "axios";
import "./App.css";
import { Input, InputGroup, Button } from "reactstrap";
import { RotateLoader } from "react-spinners";
import ResultCard from "./components/ResultCard.js";

let maxResults = 25;
// Main app loop ///
function PageMain() {
  // set initial state values
  const [searchQuery, setSearchQuery] = useState("");
  const [resultCards, setResultCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // api handler
  const handleFormSubmit = () => {
    setLoading(true);
    api
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${maxResults}`
      )
      .then((res) => {
        setResultCards(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err.response);
      });
  };

  // search form
  const SearchForm = () => {
    return (
      <div id="main">
        <div id="filter" className="filter"></div>
        <h1 id="page-title" className="text-center"> Google Books Data Explorer</h1>
        <div id="search-form">
          <InputGroup size="lg" className="md-3">
            <Input
              placeholder="Seach Google Books"
              value={searchQuery}
              onChange={(evt) => setSearchQuery(evt.target.value)}
            />

            <Button id="searchBtn" color="secondary" onClick={handleFormSubmit}>
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup>
          <div className="d-flex text-white justify-content-center"></div>
        </div>
      </div>
    );
  };

  const handleResultCards = () => {
    if (loading) {
      return (
        <div id="loader-div">
          <br></br>
          <RotateLoader id="loader" />
          <br></br>
        </div>
      );
    } else {
      const queryResultItems = resultCards.map((item, i) => {
        let thumbnail = "";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <ResultCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              description={item.volumeInfo.description}
              authors={item.volumeInfo.authors}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row">{queryResultItems}</div>
        </div>
      );
    }
  };

  return (
    <div className="w-100 h-100">
      {SearchForm()}
      {handleResultCards()}
    </div>
  );
}

export default PageMain;
