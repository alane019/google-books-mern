import React from "react";
import api from "../utils/API";


// API example, Dune //////////////////////
api.getSearchResults("dune")
    .then( (res) => {
        console.log("-----------------------")
        console.log("-[E.G., Dune ]-------------")
        console.log(res.data.items[0].volumeInfo);
        console.log("-----------------------")
        console.log(res.data.items[0].volumeInfo.title);
        console.log(res.data.items[0].volumeInfo.authors);
        console.log(res.data.items[0].volumeInfo.description);
        console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
        console.log(res.data.items[0].volumeInfo.canonicalVolumeLink);
        console.log(res.data.items[0].volumeInfo.infoLink);
        }
    ).catch( err => console.log(err));
    //////////////////////////////////////


const  Form = (props)  =>  {
    return( 
        <div className="form-container">
            {/* <form>
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="Search for a book by name... "
                    value={props.userText}
                    onChange={props.handleTextInput}
                />
                <button className="btn"> Search </button>
            </form>
            <div> 
                <ul>
                    {this.state.map((result, index) => (
                    <li key={index}> 
                        {result}
                    </li>
                    ))}
                </ul>
            </div>         */}
        </div>
    ); 
}
export default Form;
