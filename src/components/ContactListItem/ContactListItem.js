import React from "react";

import i from "./ContactListItem.module.css";
import { NavLink } from "react-router-dom";
import { Button, ListItem } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { contactsOperations } from "../../redux/contacts";

function Item() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    function fetchContact() {
      dispatch(contactsOperations.fetchContacts());
    }
    fetchContact();
  }, [dispatch]);

  const onDelete = (id) => dispatch(contactsOperations.deleteContacts(id));

  async function handleSubmit(id) {
    await onDelete(id);
  }

  return (
    <>
      {contacts &&
        contacts
          .filter((option) =>
            option.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <ListItem
              key={contact.name}
              className={i.item}
              data-id={contact.name}
            >
              <NavLink to={`/contacts/${contact.id}`} className={i.link}>
                <p>name: {contact.name}:</p>
                <p>number: {contact.number}</p>
              </NavLink>
              <Button
                type="button"
                onClick={() => handleSubmit(contact.id)}
                className={i.btn}
                variant="outlined"
                color="error"
                size="large"
              >
                <DeleteForever />
              </Button>
            </ListItem>
          ))}
    </>
  );
}

export default Item;
