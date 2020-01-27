export const ADD_CONTACT = "ADD_CONTACT";
export const CONTACT_FORM = "CONTACT_FORM";

export const addContact = (contactName) => ({type: ADD_CONTACT, payload: {name: contactName }});
export const contactForm = () => ({type: CONTACT_FORM});
