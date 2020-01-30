export const ADD_CONTACT = "ADD_CONTACT";
export const CONTACT_FORM = "CONTACT_FORM";
export const LOGIN = "LOGIN";
export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const LOAD_NOTES = "LOAD_NOTES";
export const SHOW_DETAILS = "SHOW_DETAILS";
export const ADD_NOTE = "ADD_NOTE";

export const addContact = (contact) => ({type: ADD_CONTACT, payload: contact});
export const contactForm = () => ({type: CONTACT_FORM});
export const login = () => ({type: LOGIN});
export const loadContacts = (payload) => ({type: LOAD_CONTACTS, payload});
export const loadNotes = (payload) => ({type: LOAD_NOTES, payload});
export const showDetails = (id) => ({type: SHOW_DETAILS, payload: id});
export const addNote = (note) => ({type: ADD_NOTE, payload: note})
