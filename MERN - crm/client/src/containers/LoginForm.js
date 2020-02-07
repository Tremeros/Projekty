import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import {login, wrongLogin, wrongRegistration, loadContacts, registration} from "../redux/actions";

const mapState = (state) => ({
  users: state.users,
  currentUser: state.currentUser,
  contactsList: state.contacts,
  wrongLogin: state.loginNotGood,
  wrongReg: state.registrationNotGood
})

const mapDispatch = (dispatch) => ({
  confirmLogin: (user) => dispatch(login(user)),
  loadList: () => dispatch(loadContacts()),
  register: (user) => dispatch(registration(user)),
  badLoginDatas: () => dispatch(wrongLogin()),
  badRegistrationDatas: () => dispatch(wrongRegistration())
})


const connectedLoginForm = connect(mapState, mapDispatch)(LoginForm);

export default connectedLoginForm;
