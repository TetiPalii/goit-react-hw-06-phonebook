import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const [inputName, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      Notiflix.Report.warning(
        'Warning',
        `${name.value} is already in contacts.`
      );
    } else {
      dispatch(addContacts(name.value, number.value));
    }

    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(name, value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={inputName}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
