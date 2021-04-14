import "./App.css";
import React, { useState } from "react";
import api from "axios";
import { Input, InputGroup, Button, Card } from "reactstrap";

import { RotateLoader, BounceLoader } from "react-spinners";
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
      //BounceLoader
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

  /*
  const bookSchema = new Schema({
title: String, 
authors: [String],
 desription: String,
 image: String, 
 link: String, 
  */




  /* -------------------------------------------------------------- */
  // search form
  const SearchForm = () => {
    return (
      <div id="page" className="filter">
        <h1 id="page-title" className="text-center"> Google Books Data Explorer</h1>
        <div id="search-form">
          <InputGroup size="lg">
            <Input
              size="lg"
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


  /* -------------------------------------------------------------- */


  const handleResultCards = () => {



    if (!loading) {
      const queryResultItems = resultCards.map(
        (item, id) => {
        let thumbnail = "./books-missing-thumb.png";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        let pdf = "Not available";
        if (item.accessInfo.pdf.isAvailable) { 
          pdf = item.accessInfo.pdf.downloadLink
        }
     
     

        console.log(thumbnail);

        console.log(" \n \n ~~~~~~~~~~~~~~~~~")
        console.log(item)
        console.log("~~~~~~~~~~~~~~~~~ \n \n")
   
 
    
        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <ResultCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              description={item.volumeInfo.description}
              authors={item.volumeInfo.authors}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
              googleId = {item.id}
              pdf={pdf}
              webReaderLink={item.webReaderLink}
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

export default PageMain;
