import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import {login} from "../redux/actions";

const mapDispatch = (dispatch) => ({
  confirmLogin: () => dispatch(login())
})


const connectedLoginForm = connect(null, mapDispatch)(LoginForm);

export default connectedLoginForm;
