import {ADD_CONTACT, CONTACT_FORM, LOAD_CONTACTS, LOGIN, SHOW_DETAILS, ADD_NOTE, LOAD_NOTES }from "./actions";
import {combineReducers} from "redux";


const initialState = {
  contactsNotes: [],
  selectedContact: null,
  contactDetails: false,
  login: true,
  newContactForm: false,
  contacts: []
}

const contacts = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN:
    return {...state, login: !state.login}

    case CONTACT_FORM:
    return {...state, newContactForm: true};

    case ADD_CONTACT:
    const contact = [...state.contacts, action.payload];
    const notes = [...state.contactsNotes, {id: action.payload.id, text: ""}];
    return {...state, contacts: contact, contactsNotes: notes, newContactForm: false};

    case LOAD_CONTACTS:
    return {...state, contacts: action.payload};

    case LOAD_NOTES:
    return {...state, contactsNotes: action.payload};

    case SHOW_DETAILS:
    const contacts = [...state.contacts];
    const selected = contacts.filter(el => {
      if(el.id == action.payload) {
        return el;
      }
    })
    return {...state, contactDetails: !state.contactDetails, selectedContact: selected, tempContact: null };

    case ADD_NOTE:
    const newNote = [...state.contactsNotes].map(el => {
      if(el.id == action.payload.id) {
        return {id: el.id, text: action.payload.text};
      } else {
        return el;
      }
      }
    );

    return {...state, contactsNotes: newNote};



    default:
    return state;
  }
}


export default contacts;
