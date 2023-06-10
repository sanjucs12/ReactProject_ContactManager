import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// const dummyContacts = [
//   {
//     id:'1',
//     name:'Sanju',
//     email:'sanjucs12@gmail.com'
//   },
//   {
//     id:'2',
//     name:'Kushal',
//     email:'kushalcs12@gmail.com'
//   }
// ]

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
    console.log(contact);
  };
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
