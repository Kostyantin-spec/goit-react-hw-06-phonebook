import { getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div >
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? <Filter /> : <h2>Your phonebook is empty</h2>}

      {contacts.length > 0 && <ContactList />}
    </div>
  );
};