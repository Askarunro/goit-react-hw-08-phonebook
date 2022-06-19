import i from "./ContactListItem.module.css";
import { useDeleteContactMutation } from "..//../redux/api/contactsApi"
import PropTypes from 'prop-types';

function Item({filter,contacts}) {
  const [deleteContact] = useDeleteContactMutation();
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
  filter: PropTypes.string,
}