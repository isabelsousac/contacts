import { useEffect } from 'react';
import { useState } from 'react';
import { Contact as ContactInterface } from '../interfaces';
import { getContacts } from '../service';
import Loading from './Loading';
import ContactCard from './ContactCard';
import Divider from '@mui/joy/Divider';
import { getUniqueAvatarSrc } from "../avatars";
import { useSearchParams } from "react-router-dom";

const Contacts = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const [contacts, setContacts] = useState<ContactInterface[]>();
    const [filteredContacts, setFilteredContacts] = useState<ContactInterface[]>();

    const loadingCards = () => {
        for (let i = 0; i < 10; i++) {
            return (<Loading key={i} />)
        }
    }

    const fetchContacts = async () => {
        const allContacts = await getContacts();
        setContacts(allContacts);
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        if (!contacts) {
            setFilteredContacts([]);
            return;
        }
        const name = searchParams.get("name");
        if (!name) {
            setFilteredContacts(contacts);
            return;
        }
        const filterResult = [];
        for (const contact of contacts) {
            if (contact.name.includes(name)) {
                filterResult.push(contact);
            }
        }
        setFilteredContacts(filterResult);
    }, [contacts, searchParams])

    if (!filteredContacts) {
        return (
            <div>
                <h1>Contacts</h1>
                <div className='all-search-container'>
                    <h2>All</h2>
                </div>

                <Divider role="presentation" />
                <div className='contacts-grid'>
                    {loadingCards()}
                </div>
            </div>
        )
    }

    return (
        <div >
            <h1>Contacts</h1>
            <div className='all-search-container'>
                <h2>All</h2>
            </div>

            <Divider role="presentation" />
            <div className='contacts-grid'>
                {filteredContacts.map((person) => (
                    <ContactCard
                        key={person.id}
                        contact={person}
                        avatarSrc={getUniqueAvatarSrc(person.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Contacts;