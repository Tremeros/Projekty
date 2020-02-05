import React from "react";

class RegistryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      hasło: "",
      imie: "",
      nazwisko: "",
      nazwa: "",
      stanowisko: "",
      userlist: this.props.usersList
    }
  }



  onChangeHandle = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleNameChange = (e) => {
    e.preventDefault();
    const user = {
      login: this.state.login,
      hasło: this.state.hasło,
      imie: this.state.imie,
      nazwisko: this.state.nazwisko,
      nazwa: this.state.nazwa,
      stanowisko: this.state.stanowisko
    }

    this.props.register(user);
    this.setState({userlist: this.props.userList});
    this.setState({login: "", hasło: "", imie: "", nazwisko: "", nazwa: "", stanowisko: ""});
  }



componentDidUpdate = () => {
  localStorage.setItem('users', JSON.stringify(this.props.usersList));
  console.log(this.props.usersList);
}

  render() {
    return (
      <div>
          <form className="loginForm">
            <label>
              Login:
              <input name="login" type="text" value={this.state.login} onChange={this.onChangeHandle}/>
            </label>
            <label>
              Hasło:
              <input name="hasło" type="text" value={this.state.hasło} onChange={this.onChangeHandle}/>
            </label>
            <label>
              Imie:
              <input name="imie" type="text" value={this.state.imie} onChange={this.onChangeHandle}/>
            </label>
            <label>
              Nazwisko:
              <input name="nazwisko" type="text" value={this.state.nazwisko} onChange={this.onChangeHandle}/>
            </label>
            <label>
              Nazwa firmy:
              <input name="nazwa" type="text" value={this.state.nazwa} onChange={this.onChangeHandle}/>
            </label>
            <label>
              Stanowisko:
              <input name="stanowisko" type="text" value={this.state.stanowisko} onChange={this.onChangeHandle}/>
            </label>
            <button className="loginButton"  onClick={this.handleNameChange}>Zaloguj</button>
          </form>
       </div>
    )
  }
}

export default RegistryForm;
