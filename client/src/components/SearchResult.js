
import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button,
  Toast, ToastBody, ToastHeader} from 'reactstrap';
import api from "../utils/API.js";

const ResultCard = ({ image, title, description, authors,
   previewLink, googleId, pdf, webReaderLink, pdfIsAvailable, previewLinkText }) => {

  let book = {  image, title, description, authors,
   previewLink, googleId, pdf, webReaderLink, pdfIsAvailable  };
  
   let buttonLabel = "Save book";
  
   const [show, setShow] = useState(false);
   const toggle = () => {
     setShow(!show);
     handleClick();
    }

    console.log({book});
  
     
    // Toast.propTypes = {
    //   className: PropTypes.string,
    //   color: PropTypes.string, // default: 'success'
    //   isOpen: PropTypes.bool,  // default: true
    //   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    //   // Controls the transition of the toast fading in and out
    //   // See Fade for more details
    //   transition: PropTypes.shape(Fade.propTypes),
    // }

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
  
           {/* <div className="details pdf buttons-con action-link-wrap"> 
           {pdfIsAvailable
               ?   <a href={pdf} className="btn-link" 
               color="default" type="button" target="_blank"
               rel="noopener noreferrer" > PDF Available</a> 
               : <div> </div>
           }   
          </div>   */}
          <br></br>
        <div className="details"> 
                   <div> <a> Authors: {authors} </a>  </div>
        </div>
              <div>
                <Button  className="save-btn" onClick={handleClick} color="primary"> Save </Button> 
       
              </div>
      </CardBody>
        <Toast isOpen={show}>
          <ToastHeader toggle={toggle}> Saved </ToastHeader>
          <ToastBody> Book has been saved </ToastBody>
        </Toast> 
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