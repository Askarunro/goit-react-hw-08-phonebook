import i from './ContactListItem.module.css';
import { useDeleteContactMutation } from 'redux/contacts';

function Item({ name, phone, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <li>
        <div>
          <p>
            <span role="img" aria-label="Icon-pika">
              ⚡
            </span>
            {name}
          </p>
          : {phone}
        </div>
        <button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isLoading}>
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      </li>
    </>
  );
}

export default Item;
