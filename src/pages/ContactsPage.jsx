import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from '../components/contactForm/ContactForm';
import SearchBox from '../components/searchBox/SearchBox';
import ContactList from '../components/contactList/ContactList';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <>
            <ContactForm />
            <SearchBox />
            {loading && <p>Loading...</p>}
            {error && <p>something went wrong {error}</p>}

            <ContactList />
        </>
    );
}
