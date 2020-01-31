export const ADD_CONTACT = "ADD_CONTACT";
export const CONTACT_FORM = "CONTACT_FORM";

export const LOGIN_FORM = "LOGIN_FORM";
export const LOGIN = "LOGIN";

export const REGISTRATION_FORM = "REGISTRATION_FORM";
export const REGISTRATION = "REGISTRATION";

export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const LOAD_USERS = "LOAD_USERS";

export const LOAD_NOTES = "LOAD_NOTES";
export const SHOW_DETAILS = "SHOW_DETAILS";
export const ADD_NOTE = "ADD_NOTE";

export const addContact = (contact) => ({type: ADD_CONTACT, payload: contact});
export const contactForm = () => ({type: CONTACT_FORM});

export const loginForm = () => ({type: LOGIN_FORM});
export const login = (payload) => ({type: LOGIN, payload});

export const registrationForm = () => ({type: REGISTRATION_FORM});
export const registration = (user) => ({type: REGISTRATION, payload: user});

export const loadContacts = (payload) => ({type: LOAD_CONTACTS, payload});
export const loadUsers = (payload) => ({type: LOAD_USERS, payload});

export const loadNotes = (payload) => ({type: LOAD_NOTES, payload});
export const showDetails = (id) => ({type: SHOW_DETAILS, payload: id});
export const addNote = (note) => ({type: ADD_NOTE, payload: note})
