import { connect } from "react-redux";
import Contacts from "../components/contacts";
import {contactForm, addContact, loadContacts, asyncAdd, showDetails} from "../redux/actions";

const mapState = (state) => ({
  contactsList: state.contacts,
  newContact: state.newContactForm,
  contactDetails: state.contactDetails
})

const mapDispatch = (dispatch) => ({
  add: () => dispatch(contactForm()),
  confirmContact: (name) => dispatch(addContact(name)),
  loadList: (list) => dispatch(loadContacts(list)),
  details: (id) => dispatch(showDetails(id))
})

const combineContacts = connect(mapState, mapDispatch)(Contacts);
export default combineContacts;
