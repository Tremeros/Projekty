import React from 'react';
import Bar from "./chart";
import Line from "./Line";
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import "./style.css";

class App extends React.Component {
 

  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="jumbotron">
          <h1>Chart generator</h1>
          </div>
          <div className="list-group list-group-horizontal">
            <Link className="list-group-item" to="/">Słupkowy</Link>
            <Link className="list-group-item" to="/line">Liniowy</Link>
          </div>
          <Route exact path='/' component={Bar} />
          <Route path="/line" component={Line} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
