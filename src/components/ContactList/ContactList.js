import Item from "../ContactListItem";
import l from "./ContactList.module.css";

function List({filter,contacts}) {
  return (
    <ul className={l.list}>
      <Item filter={filter} contacts={contacts}/>
    </ul>
  );
}

export default List;
