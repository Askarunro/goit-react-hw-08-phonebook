import i from "./ContactListItem.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDeleteContactMutation, useGetContactsQuery } from "..//../redux/api/contactsApi";
import { Button, ListItem } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

function Item() {
  const filter = useSelector((state) => state.filter);
  const [deleteContact] = useDeleteContactMutation();
  const { data: contacts } = useGetContactsQuery();

  return (
    <>
      {contacts &&
        contacts
          .filter((option) => option.name.toLowerCase().includes(filter.toLowerCase()))
          .map((contact) => (
            <ListItem key={contact.name} className={i.item} data-id={contact.name}>
              <NavLink to={`/contacts/${contact.id}`} className={i.link}>
                <p>name: {contact.name}:</p>
                <p>number: {contact.number}</p>
              </NavLink>
              <Button type="button" onClick={() => deleteContact(contact.id)} className={i.btn} variant="outlined" color="error" size="large">
                <DeleteForever />
              </Button>
            </ListItem>
          ))}
    </>
  );
}

export default Item;
