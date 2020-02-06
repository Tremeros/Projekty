import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import {login, loadContacts} from "../redux/actions";

const mapState = (state) => ({
  users: state.users,
  currentUser: state.currentUser,
  contactsList: state.contacts
})

const mapDispatch = (dispatch) => ({
  confirmLogin: (user) => dispatch(login(user)),
  loadList: () => dispatch(loadContacts()),
})


const connectedLoginForm = connect(mapState, mapDispatch)(LoginForm);

export default connectedLoginForm;
