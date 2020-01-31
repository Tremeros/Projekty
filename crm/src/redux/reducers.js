import {ADD_CONTACT, CONTACT_FORM, LOAD_CONTACTS, LOGIN, LOGIN_FORM, REGISTRATION_FORM, REGISTRATION,  SHOW_DETAILS, ADD_NOTE, LOAD_NOTES }from "./actions";
import {combineReducers} from "redux";


const initialState = {
  users: [],
  contactsNotes: [],
  selectedContact: null,
  contactDetails: false,
  loginForm: false,
  login: false,
  registryForm: false,
  registration: false,
  newContactForm: false,
  contacts: []
}

const contacts = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_FORM:
    if(state.login) {
      return {...state, loginForm: false, login: false}
    } else {
      return {...state, loginForm: true, login: false}
    }

    case LOGIN:
    return {...state, loginForm: false, login: true}

    case REGISTRATION_FORM:
    return {...state, registryForm: true, login: false}

    case REGISTRATION:
    const updateUsers = [...state.users, action.payload];
    return {...state, users: updateUsers};

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
