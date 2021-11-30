import "../App.css";
import React, { useEffect, useState } from "react";
import api from "../utils/API.js";
import { RotateLoader } from "react-spinners";
import ResultCard from "../components/SavedResult.js";

function SavedBookPage() {
  const [resultCards, setResultCards] = useState([]);
  const [loading, setLoading] = useState(false);

  //getSavedBooks
  useEffect(() => {
    setLoading(true);

    api
      .getSavedBooks()
      .then((res) => {
        setResultCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  const SearchForm = () => {
    return (
      <div id="page" className="filter">
        <h1 id="page-title" className="text-center">
          {" "}
          Saved Books
        </h1>
      </div>
    );
  };

  const handleResultCards = () => {
    if (!loading) {
      const savedBookArrayItems = resultCards.map((arrayItem, _id) => {

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

        return (
          <div className="col-lg-4 mb-3" key={arrayItem.id}>
            <ResultCard
              thumbnail={image}
              title={arrayItem.title}
              description={arrayItem.description}
              authors={arrayItem.authors}
              previewLink={arrayItem.previewLink}
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
