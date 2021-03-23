//Header component is rendered to the top of each page
import React from "react";
import {Animated} from "react-animated-css";

let handleClick = () => {
  // ...
  window.alert("click handled");
  // isVisible 
} 

function PageHeading() {
  return (

        // animationIn="bounceInLeft"
    <Animated  animationOut="zoomOutDown" animationInDuration={1000}  isVisible={false}>
    <div style={{padding: 15}} className="App-Header container">
          <h1 style={{fontSize: 45, marginBottom: 0, padding: 10}} className="display-4">Google Books Data Explorer</h1>
          <p style={{color:"gray", paddingLeft: 12, marginTop: 0}} className="lead">{
          (new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format())
          }</p>
        </div>
    </Animated>
  );
}

export default PageHeading;
