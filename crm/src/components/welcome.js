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
         <h2>Witaj! Jesteś zalogowany jako użytkownik</h2>
       </Main>
     </div>
   )
 }

}


export default Welcome;
