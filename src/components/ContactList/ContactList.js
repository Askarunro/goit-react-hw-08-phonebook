import Item from "../ContactListItem";
import l from "./ContactList.module.css";

function List({ state }) {
  return (
    <ul className={l.list}>
      <Item state={state} />
    </ul>
  );
}

export default List;
