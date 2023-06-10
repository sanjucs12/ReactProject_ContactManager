import React from "react";

const AddContact = () => {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Name"></input>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email"></input>
        </div>
        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
