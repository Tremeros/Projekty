import React from 'react';
import Bar from "./chart";
import Line from "./Line";
import {HashRouter, Route, Link, Switch} from "react-router-dom";

class App extends React.Component {
 

  render() {
    return (
      <HashRouter>
        <div className="container">
          <h1>Chart generator</h1>
          <div className="list-group">
            <Link to="/">Słupkowy</Link>
            <Link to="/line">Liniowy</Link>
          </div>
          <Route exact path='/' component={Bar} />
          <Route path="/line" component={Line} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
