import React from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import './sass/App.scss';
import Main from "./containers/Main";
import NotFound from "./components/NotFound";
import Contacts from "./containers/Contacts";
import Welcome from "./containers/Welcome";
import Stats from "./components/Stats";
import Timetable from "./components/Timetable";
import Documents from "./components/Documents";
import store from "./redux/store";

function App() {
  return (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/stats" component={Stats}/>
        <Route path="/timetable" component={Timetable}/>
        <Route path="/documents" component={Documents}/>
        <Route component={NotFound}/>
      </Switch>
    </HashRouter>
  </Provider>
  );
}

export default App;
