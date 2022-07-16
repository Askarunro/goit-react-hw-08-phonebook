import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ContactForm from "../components/ContactForm";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations } from "../redux/contacts";

export default function ContactView() {
  const { id } = useParams();
  const [cont, setCont] = useState();
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    function fetchContact() {
      dispatch(contactsOperations.fetchContacts());
    }
    fetchContact();
  }, [dispatch]);

  useEffect(() => {
    if (allContacts) {
      allContacts.find((contact) => {
        if (contact.id === id) {
          setCont(contact);
        }
      });
    }
  }, [allContacts]);

  return (
    <div>
      {cont && (
        <ContactForm
          btnTitle={`Update Contact`}
          contName={cont.name}
          contNumber={cont.number}
          id={id}
        />
      )}
    </div>
  );
}
