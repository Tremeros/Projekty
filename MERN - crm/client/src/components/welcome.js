import React from "react";
import Main from "../containers/Main";
import '../sass/App.scss';
import { HashRouter, Route, Switch, Link } from "react-router-dom";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: "Welcome"
    }
  }

 render() {
   return (
     <div>
       <Main>
        <div className="welcome">
        <h2>{this.props.logedUser && `Witaj, jesteś zalogowany jako ${this.props.logedUser.imie} ${this.props.logedUser.nazwisko}`}</h2>
        <div className="all">
             <div className="lefter">
               <div className="text">Teerminarz</div>
             </div>
             <div className="left">
               <div className="text">Statystyki</div>
             </div>
             <div className="center">
               <div className="explainer"><span>Hover me</span></div>
               <div className="text">Kontakty</div>
               </div>
             <div className="right">
               <div className="text">Dokumenty</div>
             </div>
             <div className="righter">
               <div className="text">Poczta</div>
             </div>
           </div>
        </div>
       </Main>
     </div>
   )
 }

}


export default Welcome;
