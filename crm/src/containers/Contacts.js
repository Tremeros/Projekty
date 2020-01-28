import { connect } from "react-redux";
import Contacts from "../components/contacts";
import {contactForm, addContact, loadContacts, asyncAdd} from "../redux/actions";

const mapState = (state) => ({
  contactsList: state.contacts,
  newContact: state.newContactForm
})

const mapDispatch = (dispatch) => ({
  add: () => dispatch(contactForm()),
  confirmContact: (name) => dispatch(addContact(name)),
  loadList: (list) => dispatch(loadContacts(list))
})

const combineContacts = connect(mapState, mapDispatch)(Contacts);
export default combineContacts;
