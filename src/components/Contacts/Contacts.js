// import f from "./ContactForm.module.css";
import { useState } from "react";

import { Outlet } from "react-router";
import { useSelector  } from "react-redux";
import { useGetContactsQuery } from "..//..//redux/api/contactsApi"

import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList/";


// import { lazy, Suspense } from "react";


// const ContactsList = lazy(() => {
//   return import("./component/ContactsList");
// });
// const Filter = lazy(() => {
//   return import("./component/Filter");
// });
// const ContactForm = lazy(() => {
//   return import("./component/ContactForm");
// });

function Contacts() {
  const token = useSelector((state) => state.token);
  
  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm/>
    <h2>Contacts</h2>
    <Filter/>
    <ContactList/>
  </div>
  );
}

export default Contacts;
