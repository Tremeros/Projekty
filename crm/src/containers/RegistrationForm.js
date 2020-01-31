import { connect } from "react-redux";
import RegistryForm from "../components/RegistryForm";
import {registration, asyncReg, loadUsers} from "../redux/actions";


const mapState = (state) => ({
  usersList: state.users
})

const mapDispatch = (dispatch) => ({
  register: (user) => dispatch(registration(user))

})


const combineRegistrationForm = connect(mapState, mapDispatch)(RegistryForm);

export default combineRegistrationForm;
