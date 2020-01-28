import React from "react";
import Main from "./Main";

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
         {this.state.welcome}
       </Main>
     </div>
   )
 }

}


export default Welcome;
