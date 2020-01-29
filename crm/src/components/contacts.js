import React from "react";
import '../App.css';
import Main from "../containers/Main";
import Details from "../containers/Details";


 class Contacts extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       name: "",
       companyName: "",
       phoneNumber: "",
       email: "",
       date: new Date()
     }
   }

   componentDidMount() {
     const list = this.props.contactsList;
     console.log(list);
     console.log(this.props.newContact);
     let aValue = JSON.parse(window.localStorage.getItem('contacts'));
     (aValue && this.props.loadList(aValue));
     console.log(aValue);
   }

   componentDidUpdate() {
      localStorage.setItem('contacts', JSON.stringify(this.props.contactsList));
   }

   addContact = (e) => {
     e.preventDefault();
     this.props.add();

   }

   onChangeHndle = (e) => {
     this.setState({[e.target.name]: e.target.value})
   }

   confirm = (e) => {
     e.preventDefault();
     const newContact = {
       id: this.props.contactsList.length,
       name: this.state.name,
       companyName: this.state.companyName,
       phoneNumber: this.state.phoneNumber,
       email: this.state.email,
       date: `${this.state.date.getDate()}.${this.state.date.getMonth() + 1}.${this.state.date.getFullYear()}`
     }
     this.props.confirmContact(newContact);
     this.setState({name: "", companyName: "", phoneNumber: "", email: ""});
     console.log(this.props.contactsList);

   }

   show = (e) => {
     e.preventDefault();
     this.props.details(e.target.parentElement.id);
     console.log(e.target.parentElement.id);
   }

   render() {
     return (


    <Main>
      {(this.props.contactDetails) ? <Details/> : <div className="contacts">
         <h2>Lista kontaktów</h2>
         <button className="newContact" onClick={this.addContact}>Nowy kontakt</button>
         <div className="contactListBar">
            <span>Imie i nazwisko</span>
            <span>Nazwa firmy</span>
            <span>Telefon</span>
            <span>Adres email</span>
            <span>Data utworzenia</span>
         </div>
         {this.props.newContact && <form className="contactForm">
           <span>Imie: <input type="text" name="name" value={this.state.name} onChange={this.onChangeHndle}/></span>
           <span>Nazwa firmy: <input type="text" name="companyName" value={this.state.companyName} onChange={this.onChangeHndle}/></span>
           <span>Telefon: <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChangeHndle}/></span>
           <span>Email: <input type="email" name="email" value={this.state.email} onChange={this.onChangeHndle}/></span>
           <button onClick={this.confirm}>Dodaj</button>
           </form>}
          <div className="contactsList">
          {this.props.contactsList.map((el, index) => {
            return (
              <div key={index} id={el.id} className="contact" onClick={this.show}>
                         <div><span className="contactName">{el.name}</span></div>
                         <div><span className="contactName">{el.companyName}</span></div>
                         <div><span className="contactName">{el.phoneNumber}</span></div>
                         <div><span className="contactName">{el.email}</span></div>
                         <div><span className="contactName">{el.date}</span></div>
                     </div>
            )
          })}
          </div>
       </div>}
      </Main>
     )
   }
 }

export default Contacts;
