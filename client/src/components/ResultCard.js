import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button} from 'reactstrap';
import api from "../utils/API.js";

const ResultCard = ({ thumbnail, title, description, authors, previewLink }) => {

  let book = { thumbnail, title, description, authors, previewLink };

  const handleClick = () => {
    console.log(book);
      api.addBook(book)
        // .then(res => console.log(` - - -  Axios response in results card:  ${res} - - - `))
        // .catch(err => console.error(err));
  }

  return (                            
    <Card style={{ maxHeight: "350", maxWidth: "300px" }} className="flex-parent card-item">
      <CardImg top style={{  margin: "5px", marginLeft: "75px", marginRight: "75px", width: "150px", maxHeight: "200px"}}
       src={thumbnail} alt={title} />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
          <div className="details descr truncate-overflow">  
            {description}
          </div>
          <div className="details"> 
          <a href={previewLink} className="btn-link" 
            color="default" type="button" target="_blank"
            rel="noopener noreferrer" > See full details on Google Books 
          </a>
        </div>  
          <br></br>
        <div className="details"> <i> Authors: {authors} </i> </div>
        <Button  onClick={handleClick} color="success"> Save book </Button> {' '}
      </CardBody>
    </Card>
  );
};


export default ResultCard;
