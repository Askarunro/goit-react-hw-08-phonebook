import { useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import styles from './ContactForm.module.css'


 function  ContactForm(){ 
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const shortid = require("shortid");
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const onSaveContactClicked = (data) => {
    const message = `${data.name} is alredy in contacts`;
    const findName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    const findNumber = contacts.find(contact => contact.number === data.number);
  
    if (findName || findNumber !== undefined) {
      alert(message);
      return
    };
    
    if (contacts) {
      dispatch(contactsOperations.addContacts(name, number));
       
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveContactClicked ({name, number});
    reset();
  };

   const reset = () => {
     setName('');
     setNumber(''); 
  };
  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
    };
    
   const handleChangeNumber = (e) => {
       setNumber(e.currentTarget.value);
     };
  

    return (
      <div>
      <form type="submit"
      onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Ім'я
          <TextField
             margin="normal"
             fullWidth
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Enter name"
            aria-label="Input for your name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <label htmlFor={numberInputId}>
         Номер
          <TextField
           margin="normal"
           fullWidth
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            onChange={handleChangeNumber}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          
        </label>
        <Button variant="contained" color="success"  type='submit'>Додати Контакт</Button>
      </form>
      </div>
    );
};

export default ContactForm;

  //========================== propTypes ===================
 ContactForm.propTypes = {
    onSubmit: PropTypes.func,
  };