import React from "react";
import "./components.css";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      login: "",
      password: ""
    }
  }

  onChangeHandle = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handleNameChange = (e) => {
    e.preventDefault();
    console.log(this.props.users);
    this.props.users.forEach(el => {
      if(el.login == this.state.login && el.hasło == this.state.password) {
        return this.props.confirmLogin(el);
      }
    });

    let aValue = JSON.parse(window.localStorage.getItem('contacts'));
    aValue && this.props.loadList(aValue);

    if(this.props.contactsList === true && this.props.currentUser === true) {
      const filteredContacts = this.props.contactsList.filter(el => el.user == this.props.currentUser);
      (aValue && this.props.loadList(filteredContacts));
    }
  }

 render() {
   return (
     <div>
         <form className="loginForm">
           <label>
             Login:
             <input type="text" name="login" value={this.state.login} onChange={this.onChangeHandle}/>
           </label>
           <label>
             Hasło:
             <input type="text" name="password" value={this.state.password} onChange={this.onChangeHandle}/>
           </label>
           <button className="loginButton"  onClick={this.handleNameChange}>Zaloguj</button>
         </form>
      </div>
   )
 }


}

export default LoginForm;
