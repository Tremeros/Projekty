import React from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Contacts from "./containers/Contacts";
import Welcome from "./components/welcome";
import store from "./redux/store";

function App() {
  return (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/contacts" component={Contacts}/>
        <Route component={NotFound}/>
      </Switch>
    </HashRouter>
  </Provider>
  );
}

export default App;
