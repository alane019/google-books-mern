import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button} from 'reactstrap';
import api from "../utils/API.js";

//This is a result card that will load with data for books saved to the application database

const ResultCard = ({ thumbnail, title, description, authors,
   previewLink, id,  googleId, pdf, webReaderLink, previewLinkText }) => {

  let book = {  thumbnail, title, description, authors,
    previewLink, id, googleId, pdf, webReaderLink, previewLinkText  };

    console.log("book props, resultCard.js");
    console.log(book);
    console.log({book});

//   const handleClick = () => {
//     console.log("book.id in handClick function: ");
//     console.log(book.id);
//       api.removeById(book._id)
//        .then(res => console.log(` - - -  Axios response in results card:  ${res} - - - `))
//        .catch(err => console.error(err));
//   }

  return (                            
    <Card style={{ maxHeight: "350", maxWidth: "300px" }} className="flex-parent card-item">
      <CardImg top style={{  margin: "5px", marginLeft: "75px", marginRight: "75px", width: "150px", maxHeight: "200px"}}
       src={thumbnail} alt={title} />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
          <div className="details descr truncate-overflow">  
            {description}
          </div>

          <div className="details info-link buttons-con action-link-wrap"> 
              <a href={previewLink} className="btn-link" 
                color="default" type="button" target="_blank"
                rel="noopener noreferrer"> View on Google Books 
              </a>
          </div>  
  
           {/* <div className="details pdf"> 
           { pdf != "Not available"
               ?   <a href={pdf} className="btn-link" 
               color="default" type="button" target="_blank"
               rel="noopener noreferrer" > PDF Available</a> 
               : <div> </div>
           }   
          </div>   */}

          <br></br>
        <div className="details"> <i> Authors: {authors} </i> </div>
        {/* <Button  onClick={handleClick} color="success"> Delete </Button> {' '}   */}
      </CardBody>
    </Card>
  );
};


export default ResultCard;

