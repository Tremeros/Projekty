import { connect } from "react-redux";
import Contacts from "../components/contacts";
import {contactForm, addContact, loadContacts, loadNotes, asyncAdd, showDetails} from "../redux/actions";

const mapState = (state) => ({
  contactsList: state.contacts,
  notesList: state.contactsNotes,
  newContact: state.newContactForm,
  contactDetails: state.contactDetails
})

const mapDispatch = (dispatch) => ({
  add: () => dispatch(contactForm()),
  confirmContact: (name) => dispatch(addContact(name)),
  loadList: (list) => dispatch(loadContacts(list)),
  loadNotesList: (notes) => dispatch(loadNotes(notes)),
  details: (id) => dispatch(showDetails(id))
})

const combineContacts = connect(mapState, mapDispatch)(Contacts);
export default combineContacts;
