import React from "react";
import Main from "../containers/Main";

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
         <h2>{this.props.logedUser && `Witaj, jesteś zalogowany jako ${this.props.logedUser.imie} ${this.props.logedUser.nazwisko}`}</h2>
       </Main>
     </div>
   )
 }

}


export default Welcome;
