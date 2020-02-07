import React from "react";
import "../sass/App.scss";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      login: "",
      loginReg: "",
      password: "",
      hasło: "",
      imie: "",
      nazwisko: "",
      nazwa: "",
      stanowisko: "",
      signIn: true,
      signUp: false
    }
  }

  onChangeHandle = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }


  handleNameChange = (e) => {
    e.preventDefault();
    console.log(this.props.users);
    this.props.users.forEach(el => {
      if(el.login === this.state.login && el.password === this.state.password) {
        this.props.loadList();
        this.props.confirmLogin(el);
      } else {
        this.props.badLoginDatas();
        this.setState({login: "", password: ""});
      }
    });

  }

  onChangeHandleReg = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  handleNameChangeReg = (e) => {
    e.preventDefault();
  if(this.state.loginReg === "" || this.state.hasło === "" || this.state.imie === "" || this.state.nazwisko === "" || this.state.nazwa === "" || this.state.stanowisko === "") {
    this.props.badRegistrationDatas();
  } else {
    const user = {
      login: this.state.loginReg,
      hasło: this.state.hasło,
      imie: this.state.imie,
      nazwisko: this.state.nazwisko,
      nazwa: this.state.nazwa,
      stanowisko: this.state.stanowisko
    }

    this.props.register(user);
    this.setState({userlist: this.props.userList});
    this.setState({loginReg: "", hasło: "", imie: "", nazwisko: "", nazwa: "", stanowisko: ""});
  }
  }

toggleChecked =(e) => {

  this.setState({signIn: !this.state.signIn, signUp: !this.state.signUp})
}


 render() {
   return (
     <>
     {this.props.wrongLogin && <span style={{color: "red"}}>Podane dane sa nieprawidłowe</span>}
     {this.props.wrongReg && <span style={{color: "red"}}>Uzupełnij wszystkie wymagane pola</span>}
     <div className="loginContainer">
        <div className="login-wrap">
          <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" onClick={this.toggleChecked} checked={this.state.signIn}/><label for="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" onClick={this.toggleChecked} checked={this.state.signUp}/><label for="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="user" className="label">Username</label>
                <input id="user" type="text" className="input" name="login" value={this.state.login} onChange={this.onChangeHandle}/>
              </div>
              <div className="group">
                <label for="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" name="password" value={this.state.password} onChange={this.onChangeHandle}/>
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked/>
                <label for="check"><span className="icon"></span> Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" onClick={this.handleNameChange} />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label for="user" className="label">Username</label>
                <input id="user" type="text" name="loginReg" value={this.state.loginReg} className="input" onChange={this.onChangeHandleReg}/>
              </div>
              <div className="group">
                <label for="pass" className="label">Password</label>
                <input id="pass" type="password" name="hasło" value={this.state.hasło} className="input" data-type="password" onChange={this.onChangeHandleReg}/>
              </div>
              <div className="group">
                <label for="pass" className="label">Imie</label>
                <input id="pass" type="text" name="imie" value={this.state.imie} className="input" onChange={this.onChangeHandleReg}/>
              </div>
              <div className="group">
                <label for="pass" className="label">Nazwisko</label>
                <input id="pass" type="text" name="nazwisko" value={this.state.nazwisko} className="input" onChange={this.onChangeHandleReg}/>
              </div>
              <div className="group">
                <label for="pass" className="label">Nazwa firmy</label>
                <input id="pass" type="text" name="nazwa" value={this.state.nazwa} className="input" onChange={this.onChangeHandleReg}/>
              </div>
              <div className="group">
                <label for="pass" className="label">Stanowisko</label>
                <input id="pass" type="text" name="stanowisko" value={this.state.stanowisko} className="input" onChange={this.onChangeHandleReg}/>
              </div>
              <div className="group">
                <input type="submit" onClick={this.handleNameChangeReg} className="button" value="Sign Up"/>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Already Member</label>
              </div>
            </div>
          </div>
          </div>
          </div>
      </div>
      </>
   )
 }


}

export default LoginForm;
