import React from "react";
import '../App.css';


 class Contacts extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       name: ""
     }
   }

   componentDidMount() {
     const list = this.props.contactsList;
     console.log(list);
     console.log(this.props.newContact);
   }

   addContact = (e) => {
     e.preventDefault();
     this.props.add();

   }

   onChangeHndle = (e) => {
     this.setState({name: e.target.value})
   }

   confirm = (e) => {
     e.preventDefault();
     this.props.confirmContact(this.state.name);
     this.setState({name: ""});
     console.log(this.props.contactsList)
   }

   render() {
     return (
       <div className="contacts">
         <span>Lista kontaktów</span>
         <button className="newContact" onClick={this.addContact}>Nowy kontakt</button>
         {this.props.newContact && <form>
           <span>Imie: <input type="text" name="name" value={this.state.name} onChange={this.onChangeHndle}/></span>
           <button onClick={this.confirm}>Dodaj</button>
           </form>}
           {this.props.contactsList.map((el, index) => {
             return <li key={index}>{el.name}</li>
           })}
       </div>
     )
   }
 }

export default Contacts;
