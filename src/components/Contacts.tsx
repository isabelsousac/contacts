import React, { useEffect } from 'react';
import { useState } from 'react';
import { Contact } from '../interfaces';
import getContacts from '../service';
import Loading from './Loading';

const ContactsComponent = (): React.JSX.Element => {
    const [contacts, setContacts] = useState<Contact[]>();

    const fetchContacts = async () => {
        const allContacts = await getContacts();
        setContacts(allContacts);
    }

    useEffect(() => {
        fetchContacts();
    }, [])

    if (contacts) {
        return (
            <div>
                {contacts.map((person) => (
                    <ContactComponent
                        key={person.id}
                        info={person}
                        avatarFile='/Users/isabelsousa/dev/job-interviews/resonate-problems/problem2/src/assets/profile1.png'
                    />
                ))}
            </div>
        );
    } else {
        return (
            <Loading />
        );
    }
}


type ContactProp = {
    info: Contact,
    avatarFile: string,
}

const ContactComponent = (contact: ContactProp): JSX.Element => {
    return (
        <div>
            <div>
                <img src={contact.avatarFile} />
                <h3>{contact.info.name}</h3>
            </div>
            <div>
                <h4>{contact.info.company.name}</h4>
                <a href={contact.info.website}>
                    {contact.info.website}
                </a>
                <br></br>
                <button>More</button>
            </div>
        </div>
    );
}

export default ContactsComponent;