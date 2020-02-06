import React from "react";
import Main from "./Main";
import "./components.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        id: this.props.contact._id
      }
  }

  addnote = (e) => {
    e.preventDefault();
    const note = {
      id: this.state.id,
      text: "Test"
    }
    this.props.addContactNote(note);
    console.log(this.props.addContactNote(note));
    console.log(this.state.id);
  }

  removeContact = (e) => {
    e.preventDefault();
    this.props.delete(this.state.id);
    this.props.loadList();
  }

  render() {
    return (

      <div className="details">
          <div className="details__data">
          <h2>Szczegóły kontaktu</h2>
          <button onClick={this.props.back}>Powrót</button>
          <button onClick={this.removeContact}>Usuń kontakt</button>
            <div className="contactDetails">
              <div className="contactDetails__header">
                <h3>Dane podstawowe</h3>
              </div>
              <div><span>Imie i nazwisko:</span> <span>{this.props.contact && this.props.contact.name}</span></div>
              <div>Nazwa Firmy: <span>{this.props.contact && this.props.contact.companyName}</span></div>
              <div>NIP: <span>{this.props.contact && this.props.contact.nip}</span></div>
              <div>REGON: <span>{this.props.contact && this.props.contact.regon}</span></div>
              <div className="contactDetails__contact"><h3>Dane kontaktowe</h3></div>
              <div>telefon: <span>{this.props.contact && this.props.contact.phoneNumber}</span></div>
              <div>email: <span>{this.props.contact && this.props.contact.email}</span></div>
              <div>www: <a href={this.props.contact && this.props.contact.www} >{this.props.contact && this.props.contact.www}</a></div>

            </div>
          </div>

          <div className="notes">
            <h2>Historia kontaktów</h2>
            <button onClick={this.addnote}>Dodaj notatkę</button>
            <div className="notes__list">
              {this.props.notesList.map((el, index) => {
                if(el.id == this.state.id) {
                  return <div key={index} className="notes__list__element"><span>{el.text}</span></div>
                }
              })}
            </div>
          </div>
      </div>

    )
  }

}

export default Details;
