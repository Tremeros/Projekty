import { connect } from "react-redux";
import Details from "../components/Details";
import {showDetails, addNote, deleteContact, loadContacts} from "../redux/actions";


const mapState = (state) => ({
  contact: state.selectedContact[0],
  notesList: state.contactsNotes
})

const mapDispatch = (dispatch) => ({
  back: () => dispatch(showDetails()),
  delete: (id) => dispatch(deleteContact(id)),
  loadList: () => dispatch(loadContacts()),
  addContactNote: (note) => dispatch(addNote(note))
})

const connectedDetails = connect(mapState, mapDispatch)(Details);

export default connectedDetails;
