import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import {login} from "../redux/actions";

const mapState = (state) => ({
  users: state.users
})

const mapDispatch = (dispatch) => ({
  confirmLogin: (user) => dispatch(login(user))
})


const connectedLoginForm = connect(mapState, mapDispatch)(LoginForm);

export default connectedLoginForm;
