import { useState,useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("Data");
      if (savedContacts !== null) {
        return JSON.parse(savedContacts);}
      return [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    newContact.id = nanoid();
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
 
  const viliablContacts = contacts.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    window.localStorage.setItem("Data", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='limbo'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={viliablContacts} onDelete={deleteContact} />
    </div>
  );
}

