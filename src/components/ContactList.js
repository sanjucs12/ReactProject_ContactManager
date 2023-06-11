import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
      };

  const renderContactList = props.contacts.map((contact) => {
    // console.log(contact.id)
    return (
      <ContactCard
        key={contact.id}
        id={contact.id}
        name={contact.name}
        email={contact.email}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return <div>{renderContactList}</div>;
};

export default ContactList;
