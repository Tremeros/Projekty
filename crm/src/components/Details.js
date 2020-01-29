import React from "react";
import Main from "./Main";
import "./components.css";

const Details = ({contact, back}) => {
  return (

    <div className="details">
    <h2>Szczegóły kontaktu</h2>
    <button onClick={back}>Powrót</button>
      <div className="contactDetails">
        <div className="contactDetails__header">
          <h3>Dane podstawowe</h3>
        </div>
        <div><span>Imie i nazwisko:</span> <span>{contact && contact.name}</span></div>
        <div>Nazwa Firmy: <span>{contact && contact.companyName}</span></div>
        <div>Numer telefonu: <span>{contact && contact.phoneNumber}</span></div>
        <div>Email: <span>{contact && contact.email}</span></div>
      </div>
    </div>

  )
}

export default Details;
