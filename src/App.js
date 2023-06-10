import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyContacts = [
  {
    id:'1',
    name:'Sanju',
    email:'sanjucs12@gmail.com'
  },
  {
    id:'2',
    name:'Kushal',
    email:'kushalcs12@gmail.com'
  }
]

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={dummyContacts}/>
    </div>
  );
}

export default App;
