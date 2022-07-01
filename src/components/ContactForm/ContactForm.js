import f from './ContactForm.module.css';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/contacts';
import { useGetContactsQuery } from 'redux/contacts';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const onChangeInput = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      number: phone,
    };
    onAddContact(newContact);
    reset();
  };

  const onAddContact = (contact) => {
    const nameToFind = data.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameToFind) {
      alert(`⚡${name} is already in contacts!`);
    } else {
      addContact(contact);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
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
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
      </label>

      <button type="submit">{isLoading ? 'Adding...' : 'Add contact'}</button>
    </form>
  );
}
