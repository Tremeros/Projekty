import React from "react";
import '../sass/App.scss';
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

   logOut = (e) => {
     e.preventDefault();
     this.props.logout();
   }

   registration = (e) => {
     e.preventDefault();
     this.props.registrationForm();
   }

   componentDidMount()  {

     this.props.loadUsersList();
     // this.props.loadContactsList();
   }



   render() {
     return (

       <div>

          <div className="navbar">
               <div className="label">Menu</div>
               <div className="spacer"></div>
               <Link className="navLink" to="/"><span>Strona główna</span></Link>
               <Link className="navLink" to="/contacts"><span>Kontakty</span></Link>
               <Link className="navLink" to="/stats"><span>Statystyki</span></Link>
               <Link className="navLink" to="/timetable"><span>Terminarz</span></Link>
               <Link className="navLink" to="/documents"><span>Dokumenty</span></Link>
               <Link className="navLink" to="/"><span>Poczta</span></Link>
               <Link onClick={!this.props.logedIn ? this.log : this.logOut} className="navLink login" to="/"><span>{this.props.logedIn ? "Wyloguj" : "Zaloguj"}</span></Link>

           </div>
         <div className="header">
           <div className="background">
             <div className="headerLine_1"></div>
             <h1>System CRM</h1>
             <div className="headerLine_2"></div>
             <p className="line-1 anim-typewriter">Podnieś wyniki sprzedaży z systemem CRM</p>
           </div>
         </div>
         <div className="container">


           <div className="main">
             <div className="logIn">
                {this.props.logedIn ? this.props.children : <div>
                  <h2>{this.props.registryFormActive ? "Zarejestruj się" : "Zaloguj się"}</h2>

                </div>}
                {this.props.registryFormActive && <RegistryForm/>}
                {this.props.loginFormActive && <LoginForm/>}
             </div>
           </div>
         </div>
       </div>
     )
   }
 }


export default Main;
