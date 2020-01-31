import { connect } from "react-redux";
import Welcome from "../components/welcome";


const mapState = (state) => ({
  logedUser: state.currentUser
})

const connectedWelcome = connect(mapState)(Welcome);

export default connectedWelcome;
