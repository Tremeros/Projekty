import React from "react";
import "./components.css";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name: ""
    }
  }

  handleNameChange = (e) => {
    e.preventDefault();
    this.props.confirmLogin();
  }

 render() {
   return (
     <div>
         <form className="loginForm">
           <label>
             Login:
             <input type="text" value={this.state.name} />
           </label>
           <label>
             Hasło:
             <input type="text" value={this.state.name} />
           </label>
           <button className="loginButton"  onClick={this.handleNameChange}>Zaloguj</button>
         </form>
      </div>
   )
 }


}

export default LoginForm;
