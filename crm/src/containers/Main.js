import { connect } from "react-redux";
import Main from "../components/Main";
import {login} from "../redux/actions";


const mapState = (state) => ({
  logedIn: state.login
})

const mapDispatch = (dispatch) => ({
  login: () => dispatch(login())
})


const connectedMain = connect(mapState, mapDispatch)(Main);

export default connectedMain;
