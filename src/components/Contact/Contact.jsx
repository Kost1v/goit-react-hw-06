import React from "react";

const Contact = ({ name, number, id ,onDeleteProfile }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button type="button" onClick={() => onDeleteProfile(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
