import { connect } from "react-redux";
import Main from "../components/Main";
import {loginForm, registrationForm, loadUsers} from "../redux/actions";


const mapState = (state) => ({
  logedIn: state.login,
  loginFormActive: state.loginForm,
  registryFormActive: state.registryForm,

})

const mapDispatch = (dispatch) => ({
  loginForm: () => dispatch(loginForm()),
  registrationForm: () => dispatch(registrationForm()),
  loadUsersList: () => dispatch(loadUsers())
})


const connectedMain = connect(mapState, mapDispatch)(Main);

export default connectedMain;
