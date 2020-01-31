import React from "react";
import '../App.css';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Contacts from "../containers/Contacts";
import LoginForm from "../containers/LoginForm";
import RegistryForm from "../containers/RegistrationForm";



 class Main extends React.Component {
   constructor(props) {
     super(props);
   }

   log = (e) => {
     e.preventDefault();
     this.props.loginForm();
   }

   registration = (e) => {
     e.preventDefault();
     this.props.registrationForm();
   }

   componentDidMount()  {
     let uValue = JSON.parse(window.localStorage.getItem('users'));
     (uValue && this.props.loadUsersList(uValue));
     console.log(uValue);
   }

   render() {
     return (

       <div>
         <div className="navbar">
           <Link className="navLink" to="/">Strona główna</Link>
           <Link className="navLink" to="/">O programie</Link>
           <Link className="navLink" to="/">Pomoc</Link>
           <Link onClick={this.log} className="navLink login" to="/">{this.props.logedIn ? "Wyloguj" : "Zaloguj"}</Link>
           <Link onClick={this.registration} className="navLink" to="/">Rejestracja</Link>
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
             <div>
                {this.props.logedIn ? this.props.children : <h2>Zaloguj sie</h2>}
                {this.props.loginFormActive && <LoginForm/>}
                {this.props.registryFormActive && <RegistryForm/>}
             </div>
           </div>
         </div>
       </div>
     )
   }
 }


export default Main;
