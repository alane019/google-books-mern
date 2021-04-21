import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button} from 'reactstrap';
import api from "../utils/API.js";

const ResultCard = ({ image, title, description, authors,
   previewLink, googleId, pdf, webReaderLink, pdfIsAvailable, previewLinkText }) => {

  let book = {  image, title, description, authors,
   previewLink, googleId, pdf, webReaderLink, pdfIsAvailable  };

    console.log({book});

  const handleClick = () => {
    console.log(book);
      api.addBook(book)
       .then(res => console.log(` - - -  Axios response in results card:  ${res} - - - `))
       .catch(err => console.error(err));
  }

  return (                     
    <Card style={{ maxHeight: "350", maxWidth: "300px" }} className="flex-parent card-item">
      <CardImg top style={{  margin: "5px", marginLeft: "75px", marginRight: "75px", width: "150px", maxHeight: "200px"}}
       src={image} alt={title} />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
          <div className="details descr truncate-overflow">  
            {description}
          </div>
          <div className="details info-link buttons-con action-link-wrap"> 
              <a href={previewLink} className="btn-link" 
                color="default" type="button" target="_blank"
                rel="noopener noreferrer" > {previewLinkText}
              </a>
          </div>  
  
           <div className="details pdf buttons-con action-link-wrap"> 
           {pdfIsAvailable
               ?   <a href={pdf} className="btn-link" 
               color="default" type="button" target="_blank"
               rel="noopener noreferrer" > PDF Available</a> 
               : <div> </div>
           }   
          </div>  
          <br></br>
        <div className="details"> 
                   <div> <a> Authors: {authors} </a>  </div>
        </div>
              <Button  onClick={handleClick} color="success"> Save book </Button> {' '} 
      </CardBody>
    </Card>
  );
};

export default ResultCard;

// thumbnail={thumbnail}
// title={item.volumeInfo.title}
// description={item.volumeInfo.description}
// authors={item.volumeInfo.authors}
// previewLink={item.volumeInfo.previewLink}
// infoLink={item.volumeInfo.infoLink}
// googleId = {item.id}
// pdf={pdf}
// webReaderLink={item.webReaderLink}