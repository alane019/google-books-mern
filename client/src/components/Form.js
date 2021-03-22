import React, { useState, useEffect} from "react";

let userResponse = "";
let searchResults = [];

function Form() {

    return(

    <div className="form-container">
        <form>

            <input
                className="search-input" type="text" 
                placeholder="enter title... "value={userResponse}
            ></input>
            <ul class="display-results-list">
            {searchResults}
            </ul>
        </form>
    </div>
    ); 
}
export default Form;