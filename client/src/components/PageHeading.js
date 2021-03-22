//Header component is rendered to the top of each page
import React from "react";

function PageHeading() {
  return (
    <div style={{padding: 15}} id="top" className="App-Header">
      <p style={{fontSize: 15, marginBottom: 0}} className="display-4">Search Google Books</p>
      <p style={{color:"gray", paddingLeft: 12, marginTop: 0}} className="lead">{
      (new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format())
      }</p>
    </div>
  );
}

export default PageHeading;
