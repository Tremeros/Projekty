import {ADD_CONTACT, CONTACT_FORM} from "./actions";
import {combineReducers} from "redux";


const initialState = {
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

    default:
    return state;
  }
}


export default contacts;
