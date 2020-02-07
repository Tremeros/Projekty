import axios from "axios";

export const ADD_CONTACT = "ADD_CONTACT";
export const CONTACT_FORM = "CONTACT_FORM";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const HIDE_DETAILS = "HIDE_DETAILS";

export const LOGIN_FORM = "LOGIN_FORM";
export const LOGIN = "LOGIN";
export const WRONG_LOGIN = "WRONG_LOGIN";
export const LOGOUT = "LOGOUT";

export const REGISTRATION_FORM = "REGISTRATION_FORM";
export const REGISTRATION = "REGISTRATION";

export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const LOAD_USERS = "LOAD_USERS";

export const LOAD_NOTES = "LOAD_NOTES";
export const SHOW_DETAILS = "SHOW_DETAILS";
export const ADD_NOTE = "ADD_NOTE";

export const addContact = (contact) => dispatch => {
  axios
  .post("/api/contacts", contact)
  .then(res => dispatch({
    type: ADD_CONTACT,
    payload: res.data
  }))
};

export const hideDeatils = () => ({type: HIDE_DETAILS})

export const deleteContact = id => dispatch => {
  axios
  .delete(`/api/contacts/${id}`)
  .then(res => dispatch({
    type: DELETE_CONTACT,
    payload: id
  }))
  dispatch(loadContacts());
  dispatch(hideDeatils());
};




export const contactForm = () => ({type: CONTACT_FORM});

export const loginForm = () => ({type: LOGIN_FORM});
export const login = (payload) => ({type: LOGIN, payload});
export const wrongLogin = () => ({type: WRONG_LOGIN});
export const logout = () => ({type: LOGOUT});

export const registrationForm = () => ({type: REGISTRATION_FORM});
export const registration = user => dispatch => {
  axios
  .post("/api/users", user)
  .then(res => dispatch({
    type: REGISTRATION,
    payload: res.data
  }))
}


export const loadContacts = () => dispatch => (
  axios
  .get("api/contacts")
  .then(res => dispatch({
    type: LOAD_CONTACTS,
    payload: res.data
  }))
);
export const loadUsers = () => (dispatch) => (
  axios
  .get("api/users")
  .then(res => dispatch({
    type: LOAD_USERS,
    payload: res.data
  }))
);

export const loadNotes = (payload) => ({type: LOAD_NOTES, payload});
export const showDetails = (id) => ({type: SHOW_DETAILS, payload: id});
export const addNote = (note) => ({type: ADD_NOTE, payload: note})
