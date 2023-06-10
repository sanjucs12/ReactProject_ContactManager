import React from "react";
import { useRef } from "react";

const AddContact = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    let contact = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
    };
    props.addContactHandler(contact);
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            ref={nameInputRef}
            required
          ></input>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            ref={emailInputRef}
            required
          ></input>
        </div>
        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
