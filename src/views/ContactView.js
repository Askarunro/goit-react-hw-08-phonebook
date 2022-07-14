import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import styles from './ContactView.module.css'

import contactsOperations  from '../redux/contacts/contacts-operations';
import ContactForm from '..//components/ContactForm/ContactForm';
import ContactFilter from '..//components/ContactFilter/ContactFilter';
import ContactList from '..//components/ContactList/ContactList';

/*
const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};
*/



export default function ContctsView(params) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    function fetchContact(){
       dispatch(contactsOperations.fetchContacts())
 }
 fetchContact()
 }, [dispatch]);

  return (
    <Container>
      <main className={styles.MainBox} >
        <h1>Книга контактів</h1>
        <ContactForm/>
        <h2>Контакти</h2>
        <ContactFilter />
       <ContactList/>
       </main>


    </Container>
  );
}
