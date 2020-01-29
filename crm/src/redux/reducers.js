import {ADD_CONTACT, CONTACT_FORM, LOAD_CONTACTS, LOGIN, SHOW_DETAILS }from "./actions";
import {combineReducers} from "redux";


const initialState = {
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
    return {...state, contacts: contact, newContactForm: false};

    case LOAD_CONTACTS:
    return {...state, contacts: action.payload};

    case SHOW_DETAILS:
    const contacts = [...state.contacts];
    const selected = contacts.filter(el => {
      if(el.id == action.payload) {
        return el;
      }
    })
    return {...state, contactDetails: !state.contactDetails, selectedContact: selected };


    default:
    return state;
  }
}


export default contacts;
