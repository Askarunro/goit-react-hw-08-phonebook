import { useSelector } from 'react-redux';
import { getFilter, useGetContactsQuery } from 'redux/contacts';

import Item from '../ContactListItem';

const ContactList = () => {
  const { data: contacts = [], isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = visibleContacts();

  return (
    <ul>
      {isLoading && <h2>Loading...</h2>}
      {contacts &&
        filteredContacts.map(({ name, id, number }) => (
          <Item key={id} name={name} phone={number} id={id} />
        ))}
    </ul>
  );
};

export default ContactList;
