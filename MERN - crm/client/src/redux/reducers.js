import {ADD_CONTACT, DELETE_CONTACT, HIDE_DETAILS, CONTACT_FORM, LOAD_CONTACTS, LOAD_USERS,  LOGIN, LOGOUT, LOGIN_FORM, REGISTRATION_FORM, REGISTRATION,  SHOW_DETAILS, ADD_NOTE, LOAD_NOTES }from "./actions";
import {combineReducers} from "redux";


const initialState = {
  currentUser: null,
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
      return {...state, loginForm: false, login: false, registryForm: false}
    } else {
      return {...state, loginForm: true, login: false, registryForm: false}
    }

    case LOGIN:
    return {...state, loginForm: false, login: true, currentUser: action.payload}

    case LOGOUT:
    return {...state, currentUser: null, login: false, contacts: []}

    case REGISTRATION_FORM:
    return {...state, registryForm: true, loginForm: false}

    case REGISTRATION:
    const updateUsers = [...state.users, action.payload];
    return {...state, users: updateUsers};

    case CONTACT_FORM:
    return {...state, newContactForm: true, registryForm: false};

    case ADD_CONTACT:
    const contact = [...state.contacts, action.payload];
    const notes = [...state.contactsNotes, {id: action.payload.id, text: ""}];
    return {...state, contacts: contact, contactsNotes: notes, newContactForm: false};

    case DELETE_CONTACT:
    return {
      ...state, contacts: state.contacts.filter(el => el._id !== action.payload),
      contactDetails: false
    }

    case LOAD_CONTACTS:
    return {...state, contacts: action.payload.filter(el => el.user === state.currentUser.login)};

    case LOAD_USERS:
    return {...state, users: action.payload};

    case LOAD_NOTES:
    return {...state, contactsNotes: action.payload};

    case SHOW_DETAILS:
    const contacts = [...state.contacts];
    const selected = contacts.filter(el => {
      if(el._id == action.payload) {
        return el;
      }
    })
    return {...state, contactDetails: !state.contactDetails, selectedContact: selected, tempContact: null };

    case HIDE_DETAILS:
    return {
      ...state, contactDetails: false
    }

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
