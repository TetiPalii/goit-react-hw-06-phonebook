import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContacts } from 'redux/contactsSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase().trim();

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

  const visibleContacts = getFilteredContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item__contact}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button
            className={css.contact__btn}
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
