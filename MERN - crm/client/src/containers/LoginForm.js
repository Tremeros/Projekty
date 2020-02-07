import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import {login, wrongLogin, loadContacts, registration} from "../redux/actions";

const mapState = (state) => ({
  users: state.users,
  currentUser: state.currentUser,
  contactsList: state.contacts,
  wrongLogin: state.loginNotGood
})

const mapDispatch = (dispatch) => ({
  confirmLogin: (user) => dispatch(login(user)),
  loadList: () => dispatch(loadContacts()),
  register: (user) => dispatch(registration(user)),
  badLoginDatas: () => dispatch(wrongLogin())
})


const connectedLoginForm = connect(mapState, mapDispatch)(LoginForm);

export default connectedLoginForm;
