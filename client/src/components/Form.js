import React, { useState, useEffect} from "react";

let userResponse = "";
let searchResults = [];
let imgs = document.getElementsByTagName("img");

let divElm = document.createElement("div");
img.forEach((itm) => {
    elementnode.insertBefore(newNode, referenceNode);
    itm.appendChild(divElm);  
    itm.insertBefore(`<h4> hello </h4>`, itm);
});

function Form() {

    return(

    <div className="form-container">
        <form>
        {/* value={userResponse} */}
            <input
                className="search-input" type="text" 
                placeholder="Search for a book by name... " 
            ></input>
            <div className="display-results-list">
            <img src="https://loremflickr.com/320/240?lock=212" />            
            <img src="https://loremflickr.com/320/240" />   
            <img src="https://loremflickr.com/320/240?random=2" />   
            <img src="https://loremflickr.com/320/240?random=3" />   
            <img src="https://loremflickr.com/320/240" /> 
            <img src="https://loremflickr.com/320/240" /> 
            <img src="https://loremflickr.com/320/240" /> 
            <img src="https://loremflickr.com/320/240?lock=212" />
            </div>
        </form>
    </div>
    ); 


}
export default Form;