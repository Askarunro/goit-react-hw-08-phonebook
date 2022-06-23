import f from "./ContactForm.module.css";
import { useState, useEffect } from "react";
import {useAddContactMutation, useGetContactsQuery} from "..//../redux/api/contactsApi"

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const {data: contacts} = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
    }
  };

  const formSubmitHandler = async (values) => {
    let exist = false;
    if (contacts.length >= 0) {
    contacts.forEach((contact) => {
        if (contact.name.toLowerCase() === values.name.toLowerCase()) {
          exist = true;
        }
      });
    }
    if (!exist) {
      await addContact(values);
      console.log(values)
    } else alert(`${values.name} is already i contacts`);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    formSubmitHandler({ name, number });
    reset();
  };

  return (
    <form onSubmit={onSubmitForm} className={f.form}>
      <label className={f.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
        />
      </label>
      <label className={f.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default Form;
