import React, { Component, useState, useEffect} from "react";
import axios from "../utils/API"
import Form from "./Form";


class PageMain extends Component {

     state = {
        userText: "",
        results: []
    }

    searchBooks = () => {
        axios.getSearchResults(this.state.search)
          .then((res) => {
            this.setState({
            results: res.data.items,
            });
          })
        .catch(() =>
            this.setState({
            results: [],
            errorMessage: "No results available. ",
            })
        );
    };

    handleTextInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
         });
    } 

    render() {
    return(
        <Form />
    )
    }
};

export default PageMain;



