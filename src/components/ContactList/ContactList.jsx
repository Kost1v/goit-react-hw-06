import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ onDeleteProfile, filteredUsers }) => {
  return (
    <ul>
      {filteredUsers.map((user) => {
        return (
          <li key={user.id}>
            <Contact
              name={user.name}
              number={user.number}
              id={user.id}
              onDeleteProfile={onDeleteProfile}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
