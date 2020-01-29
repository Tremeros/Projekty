import React from "react";
import '../App.css';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Contacts from "../containers/Contacts";



 class Main extends React.Component {
   constructor(props) {
     super(props);
   }

   log = (e) => {
     e.preventDefault();
     this.props.login();
   }

   render() {
     return (

       <div>
         <div className="navbar">
           <Link className="navLink" to="/">Strona główna</Link>
           <Link className="navLink" to="/">O programie</Link>
           <Link className="navLink" to="/">Pomoc</Link>
           <Link onClick={this.log} className="navLink login" to="/">Zaloguj</Link>
         </div>
         <div className="header">
           <div className="background"><h1>System CRM</h1></div>
         </div>
         <div className="container">
           <div className="sidebar">
             <Link className="sidenav" to="/contacts">Kontakty</Link>
             <Link className="sidenav" to="/stats">Statystyki</Link>
             <Link className="sidenav" to="/timetable">Terminarz</Link>
             <Link className="sidenav" to="/documents">Dokumenty</Link>
           </div>
           <div className="main">

             {(this.props.logedIn) ? this.props.children : <h2>Zaloguj sie</h2>}
           </div>
         </div>
       </div>
     )
   }
 }


export default Main;
