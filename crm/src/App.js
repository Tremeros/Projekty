import React from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Contacts from "./containers/Contacts";
import store from "./redux/store";

function App() {
  return (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route component={NotFound}/>
      </Switch>
    </HashRouter>
  </Provider>
  );
}

export default App;
