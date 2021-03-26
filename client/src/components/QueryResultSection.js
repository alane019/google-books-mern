import React, { PureComponent } from "react";
import api from "../utils/API.js";

class QueryResultSection extends PureComponent{
////////////////////////
  constructor(props){
    super(props);
    this.state = {
      items: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  ////////////////////////////////////////


  render() {

    return(
       <div> 
         <ul>
            {this.state.items.map((item, index) => (
              <li key={index}> 
                {item}
              </li>
            ))}
         </ul>
      </div>        
    )
            
  }
}

export default QueryResultSection; 

