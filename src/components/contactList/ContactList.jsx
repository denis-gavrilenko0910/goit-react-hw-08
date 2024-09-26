import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};

export default ContactList;
