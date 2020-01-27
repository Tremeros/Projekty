import React from "react";
import '../App.css';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Contacts from "./contacts";


 class Main extends React.Component {

   render() {
     return (

       <div>
       <div className="navbar">
         <Link className="navLink" to="/">Strona główna</Link>
         <Link className="navLink" to="/">O programie</Link>
         <Link className="navLink" to="/">Pomoc</Link>
         <Link className="navLink login" to="/">Zaloguj</Link>
       </div>
       <div className="header">
         <div className="background"><h1>System CRM</h1></div>
       </div>
       <div className="container">
         <div className="sidebar">
           <Link className="sidenav" to="/contacts">Kontakty</Link>
           <Link className="sidenav" to="/">Statystyki</Link>
           <Link className="sidenav" to="/">Terminarz</Link>
           <Link className="sidenav" to="/">Dokumenty</Link>
         </div>
         <div className="main">
         <HashRouter>
           <Switch>
             <Route path="/contacts" component={Contacts}/>
           </Switch>
         </HashRouter>
         </div>
       </div>
       </div>
     )
   }
 }


export default Main;
