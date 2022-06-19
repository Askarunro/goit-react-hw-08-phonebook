import i from "./ContactListItem.module.css";
import { useSelector  } from "react-redux";
import { useDeleteContactMutation, useGetContactsQuery } from "..//../redux/api/contactsApi"
import PropTypes from 'prop-types';

function Item() {
  const filter = useSelector((state) => state.filter);
  const [deleteContact] = useDeleteContactMutation();
  const {data: contacts} = useGetContactsQuery();

  return (
    <>
      {contacts && (contacts
        .filter((option) =>
          option.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact) => (
          <li key={contact.name} className={i.item} data-id={contact.name}>
            <p>{contact.name}:</p>
            <p>{contact.phone}</p>
            <button type="button" 
            onClick={()=>deleteContact(contact.id)} 
            className={i.btn}>
              Delete
            </button>
          </li>
        )))}
    </>
  );
}

export default Item;

Item.propTypes={
  contacts: PropTypes.array,
}