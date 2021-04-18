import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../utils/API.js";
import { Input, InputGroup, Button } from "reactstrap";

import { RotateLoader } from "react-spinners";
import ResultCard from "../components/SavedResult.js";

let maxResults = 20;

//This page is used to search Book data saved this application's database

function SavedBookPage() {
  // set initial state values
  const [searchQuery, setSearchQuery] = useState("");
  const [resultCards, setResultCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // api handler
  const handleFormSubmit = () => {
    if (searchQuery && searchQuery.trim().length !== 0) {
      setLoading(true);
      axios
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
  // useEffect ---->
  //getSavedBooks

  useEffect(() => {
    // Display saved book results using the axios http client
    setLoading(true);

    api
      .getSavedBooks()
      .then((res) => {
        console.log("response returned to Saved book page: ");
        console.log(res);
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[1].title);

        console.log(res.data);
        setResultCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err.response);
      });
  }, []);

  /* -------------------------------------------------------------- */
  // search form
  const SearchForm = () => {
    return (
      <div id="page" className="filter">
        <h1 id="page-title" className="text-center">
          {" "}
          Saved Books
        </h1>
        <div id="search-form">
          <InputGroup size="lg">
            <Input
               style={{opacity: ".001"}}
              size="lg"
              placeholder="Seach Saved Books"
              value={searchQuery}
              onChange={(evt) => setSearchQuery(evt.target.value)}
            />
            {/* <Button id="searchBtn" color="secondary" onClick={() => {console.log("#searchBtn clicked")}}> */}
            <Button id="searchBtn" style={{opacity: ".001"}} color="secondary" onClick={() => {console.log("#searchBtn clicked")}}>
              <i className="fas fa-search"> </i>
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
      const savedBookArrayItems = resultCards.map((arrayItem, _id) => {

        //data cleanup
        console.log(" \n \n ~~~ note: data cleanup ~~");
        let image;
        if (arrayItem.image) {
          image = arrayItem.image 
        }
        else{
          arrayItem.image = "./books-missing-thumb.png";
          image = arrayItem.image;
        }

        let pdf;
        if (arrayItem.pdf) {
          pdf = arrayItem.pdf;
        }
        else{
          arrayItem.pdf = "Not available";
        }

        let webReaderLink;
        if (arrayItem.webReaderLink) {
          webReaderLink = arrayItem.webReaderLink;
        }
        else{
          arrayItem.webReaderLink = "Not available";
        }

        // data check
        console.log(" \n \n ~~~ note:  data check ~~");
        console.log(" \n \n ~~~~~~~~~~~~~~~~~");
        console.log(arrayItem);
        console.log("~~~~~~~~~~~~~~~~~ \n \n");

        console.log("Check value of image variable then arrayItems.image value for saved ")
        console.log(" result card, on saved book page, handleResultCards() function: ");
        console.log(image);
        console.log(arrayItem.image);

        return (
          <div className="col-lg-4 mb-3" key={arrayItem.id}>
            <ResultCard
              thumbnail={image}
              title={arrayItem.title}
              description={arrayItem.description}
              authors={arrayItem.authors}
              previewLink={arrayItem.link}
              infoLink={arrayItem.link}
              id={arrayItem._id}
              googleId={arrayItem.googleId}
              pdf={pdf}
              webReaderLink={arrayItem.webReaderLink}
            ></ResultCard>
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row">{savedBookArrayItems}</div>
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
    }
  };

  return (
    <div id="main">
      {SearchForm()}
      {handleResultCards()}
    </div>
  );
}

export default SavedBookPage;
