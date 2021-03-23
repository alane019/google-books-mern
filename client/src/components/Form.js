import React, { useState, useEffect} from "react";
let userResponse = "";
let searchResults = [];
// useState, useEffect should be used here 
let title = "The Hunger Games"
let authors = "Suzanne Collins"
let 


     Form = ()  =>  {
    return(
    <div className="form-container">
        <form>
             {/* value={userResponse} */}
            <input className="search-input" type="text" 
                placeholder="Search for a book by name... ">
            </input> <button> Search</button>
        </form>
            <div className="display-results-list">
           

             <b> "{title}" </b>
             <i>"{authors}"</i>   
             <img className="book-cover-image" src="https://loremflickr.com/320/240?lock=212" /> 
             <a  href="http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api">books link  </a>
             <div className="text-box">  description: "Set in a dark vision of the near future, a 
                terrifying ... Katniss has been close to death before. For her, 
                survival is second nature.</div>
            <img src="https://loremflickr.com/320/240" />   
            <img src="https://loremflickr.com/320/240?random=2" />   
            <img src="https://loremflickr.com/320/240?random=3" />   
            <img src="https://loremflickr.com/320/240" /> 
            <img src="https://loremflickr.com/320/240" /> 
            <img src="https://loremflickr.com/320/240" /> 
            <img src="https://loremflickr.com/320/240?lock=212" />
           </div>
    </div>
    ); 
}
export default Form;


/* Example: 
{
 title: "The Hunger Games"
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a 
  terrifying ... Katniss has been close to death before. For her, 
     survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"

}

*/
