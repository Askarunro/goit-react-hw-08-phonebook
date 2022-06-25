import Item from "../ContactListItem";
import l from "./ContactList.module.css";

function List() {
  return (
    <ol className={l.list}>
      <Item />
    </ol>
  );
}

export default List;
