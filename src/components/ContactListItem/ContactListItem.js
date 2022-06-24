import i from "./ContactListItem.module.css";
import { useSelector  } from "react-redux";
import { NavLink, useSearchParams} from "react-router-dom";
import { useEffect } from "react";
import { useDeleteContactMutation, useGetContactsQuery } from "..//../redux/api/contactsApi"

function Item() {
  const filter = useSelector((state) => state.filter);
  const [deleteContact] = useDeleteContactMutation();
  const {data: contacts } = useGetContactsQuery();
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
 
  return (
    <>
      {contacts && (contacts
        .filter((option) =>
          option.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact) => (
          
          <li key={contact.name} className={i.item} data-id={contact.name}>
            
            <NavLink to={`/contacts/${contact.id}`} className={i.item}>
            <div ></div>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
              </NavLink>
            {/* <button type="button" 
            onClick={()=>deleteContact(contact.id)} 
            className={i.btn}>
              Delete
            </button> */}
          </li>
        )))}
    </>
  );
}

export default Item;
