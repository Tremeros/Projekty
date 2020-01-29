import { connect } from "react-redux";
import Details from "../components/Details";
import {showDetails} from "../redux/actions";


const mapState = (state) => ({
  contact: state.selectedContact[0]
})

const mapDispatch = (dispatch) => ({
  back: () => dispatch(showDetails())
})

const connectedDetails = connect(mapState, mapDispatch)(Details);

export default connectedDetails;
