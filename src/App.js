import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const [contactsRetrieved, setContactsRetrieved] = useState(false);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]); //unique key
    localStorage.setItem("contacts", JSON.stringify([...contacts, contact]));
  };

  const removeContactHandler=(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem("contacts"));
    //console.log(retrieveContacts);

    if (retrieveContacts) {
      setContacts(retrieveContacts);
      setContactsRetrieved(true);
    }
  }, []);

  useEffect(() => {
    //console.log(contacts);
    if (contactsRetrieved) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts, contactsRetrieved]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
