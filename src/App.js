import "./App.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useState } from "react";
import { useGetContactsQuery } from "./redux/api/contactsApi"


function App() {
  const [filter, setFilter] = useState("");
  const {data: contacts} = useGetContactsQuery();
  const onChangeInputFind = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts}/>

      {contacts && (
        <>
          <h2>Contacts</h2>
          <Filter onChange={onChangeInputFind}/>
          <ContactList filter={filter} contacts={contacts}/>
        </>
      )}
    </div>
  );
}

export default App;
