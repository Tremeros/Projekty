import { connect } from "react-redux";
import Main from "../components/Main";
import {loginForm, registrationForm} from "../redux/actions";


const mapState = (state) => ({
  logedIn: state.login,
  loginFormActive: state.loginForm,
  registryFormActive: state.registryForm
})

const mapDispatch = (dispatch) => ({
  loginForm: () => dispatch(loginForm()),
  registrationForm: () => dispatch(registrationForm())
})


const connectedMain = connect(mapState, mapDispatch)(Main);

export default connectedMain;
