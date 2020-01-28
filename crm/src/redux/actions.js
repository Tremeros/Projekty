export const ADD_CONTACT = "ADD_CONTACT";
export const CONTACT_FORM = "CONTACT_FORM";
export const LOGIN = "LOGIN";
export const LOAD_CONTACTS = "LOAD_CONTACTS";

export const addContact = (contact) => ({type: ADD_CONTACT, payload: contact});
export const contactForm = () => ({type: CONTACT_FORM});
export const login = () => ({type: LOGIN});
export const loadContacts = (payload) => ({type: LOAD_CONTACTS, payload});
