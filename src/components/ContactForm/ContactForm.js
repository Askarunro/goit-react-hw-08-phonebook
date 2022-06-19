import f from "./ContactForm.module.css";
import { useState } from "react";
import {useAddContactMutation, useGetContactsQuery} from "..//../redux/api/contactsApi"

function Form({contacts}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

const [addContact] = useAddContactMutation();

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
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
    } else alert(`${values.name} is already i contacts`);
  };

  const reset = () => {
    setName("");
    setPhone("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    formSubmitHandler({ name, phone });
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
          name="phone"
          value={phone}
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
