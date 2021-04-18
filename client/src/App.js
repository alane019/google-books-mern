import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


import Search from "./pages/Search";
import NoMatch from "./components/NoMatch";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} /> 
          <Route path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

