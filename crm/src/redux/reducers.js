import {ADD_CONTACT, CONTACT_FORM, LOAD_CONTACTS }from "./actions";
import {combineReducers} from "redux";


const initialState = {
  login: false,
  newContactForm: false,
  contacts: []
}

const contacts = (state=initialState, action) => {
  switch(action.type) {
    case CONTACT_FORM:
    return {...state, newContactForm: true};

    case ADD_CONTACT:
    const contact = [...state.contacts, action.payload];
    return {...state, contacts: contact, newContactForm: false};

    case LOAD_CONTACTS:
    return {...state, contacts: action.payload};

    default:
    return state;
  }
}


export default contacts;
