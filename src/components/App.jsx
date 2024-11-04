import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import friends from "../friends.json";

const App = () => {
  const [users, setUsers] = useState(() => {
    const storageUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(storageUsers) ?? friends;

    return parsedUsers;
  });

  const onAddProfile = (formValues) => {
    const finalUser = {
      ...formValues,
      id: nanoid(),
    };
    setUsers([...users, finalUser]);
  };

  useEffect(() => {
    const storageUsers = JSON.stringify(users);
    localStorage.setItem("users", storageUsers);
  });

  const onDeleteProfile = (profileId) => {
    const updateUsers = users.filter((user) => user.id !== profileId);

    setUsers(updateUsers);
  };

  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      user.number.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {});
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAddProfile={onAddProfile} />

      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        onDeleteProfile={onDeleteProfile}
        filteredUsers={filteredUsers}
      />
    </div>
  );
};

export default App;
