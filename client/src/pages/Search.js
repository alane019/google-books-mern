import "../App.css";
import React, { useState } from "react";
import api from "axios";
import { Input, InputGroup, Button } from "reactstrap";

import { RotateLoader } from "react-spinners";
import ResultCard from "../components/SearchResult.js";

let maxResults = 20;

function Saved() {
  // set initial state values
  const [searchQuery, setSearchQuery] = useState("");
  const [resultCards, setResultCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // api handler
  const handleFormSubmit = () => {

    if(searchQuery && (searchQuery.trim().length !== 0)){
      
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
    }

  };

  // search form
  const SearchForm = () => {
    return (
      <div id="page" className="filter">
        <h1 id="page-title" className="text-center"> Google Books Data Explorer</h1>
        <div display="none;" className="off" id="notif-panel"></div>

        <div id="search-form">
          <InputGroup size="lg">
            <Input
              size="lg"
              placeholder="Seach Google Books"
              value={searchQuery}
              onChange={(evt) => setSearchQuery(evt.target.value)}
            />
            <Button className="searchBtn" color="secondary" onClick={handleFormSubmit}>
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup>
          <div className="d-flex text-white justify-content-center"></div>
        </div>
      </div>
    );
  };

  const handleResultCards = () => {

    if (!loading) {
      const queryResultItems = resultCards.map(
        (item, id) => {
        let image = "./books-missing-thumb.png";
        if (item.volumeInfo.imageLinks) {
          image = item.volumeInfo.imageLinks.thumbnail;
        }

        let previewLinkText = ""; 
        let previewLink = "";
        if (item.volumeInfo.previewLink) { 
          previewLink = item.accessInfo.pdf.downloadLink;
          previewLinkText = ` View on Google Books `
        }

        let pdf = "";
        if (item.accessInfo.pdf.isAvailable) { 
          pdf = item.accessInfo.pdf.downloadLink;
        }

        let webReaderLink = "";
        if (item.webReaderLink) { 
          webReaderLink = item.webReaderLink;
        }
     
        let authors = [item.volumeInfo.authors];
   
        authors = authors ? authors.join(", ") : "";
   
        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <ResultCard
              image={image}
              title={item.volumeInfo.title}
              description={item.volumeInfo.description}
              authors={authors}
              previewLink={item.volumeInfo.previewLink}
              previewLinkText={previewLinkText}
              infoLink={item.volumeInfo.infoLink}
              googleId = {item.id}
              webReaderLink={webReaderLink}
              pdf={pdf}
              pdfIsAvailable={item.accessInfo.pdf.isAvailable}
            >
            </ResultCard>        
          </div>
        );
       }
      );

      return (
        <div className="container">
          <div className="row">{queryResultItems}</div>
        </div>
      );

    } else {
      // Page is loading
            return (
              <div id="loader-div">
                <div> Loading ... </div>
                <RotateLoader id="loader" color="#65c93d70" size="55px" />
                <div> </div>
              </div>
            );  
      };
    }


  return (
    <div id="main">
      {SearchForm()}
      {handleResultCards()}
    </div>
  );
}

export default Saved;
