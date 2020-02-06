import { connect } from "react-redux";
import Main from "../components/Main";
import {loginForm, registrationForm, loadUsers, loadContacts, logout} from "../redux/actions";


const mapState = (state) => ({
  logedIn: state.login,
  loginFormActive: state.loginForm,
  registryFormActive: state.registryForm

})

const mapDispatch = (dispatch) => ({
  loginForm: () => dispatch(loginForm()),
  registrationForm: () => dispatch(registrationForm()),
  loadUsersList: () => dispatch(loadUsers()),
  loadContactsList: () => dispatch(loadContacts()),
  logout: () => dispatch(logout())
})


const connectedMain = connect(mapState, mapDispatch)(Main);

export default connectedMain;
