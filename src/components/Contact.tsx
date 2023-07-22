import { useEffect } from 'react';
import { useState } from 'react';
import { Contact as ContactInterface } from '../interfaces';
import { getContactById } from '../service';
import { Link, useParams } from 'react-router-dom';
import { getUniqueAvatarSrc } from "../avatars";

const Contact = (): JSX.Element => {
    interface AvatarInfo {
        alt: string,
        src: string
    }
    const [contact, setContact] = useState<ContactInterface>();
    const [avatar, setAvatar] = useState<AvatarInfo>();
    const { id } = useParams<"id">();

    const fetchContact = async (id: string) => {
        const result = await getContactById(id);
        if (result) {
            setContact(result);
            setAvatar({
                alt: result.name,
                src: getUniqueAvatarSrc(result.id)
            });
        }
    }

    useEffect(() => {
        if (id) {
            fetchContact(id);
        }
    }, []);

    if (contact && avatar) {
        return (
            <div>
                <div>
                    <div className='contact-content'>
                        <img
                            className="avatar"
                            alt={avatar.alt}
                            src={avatar.src}
                        />
                        <h3 className='contact-name'>{contact.name}</h3>
                        <h4>{contact.username}</h4>

                        <br />

                        <h2>Personal Info</h2>
                        <h4>{contact.phone}</h4>
                        <h4><a href={contact.website}>{contact.website}</a></h4>
                        <h4>{contact.address.city}</h4>
                        <h4>{contact.company.name}</h4>

                    </div>
                    <br />
                </div>
            </div>

        );
    } else {
        return (
            <Link to="/contacts" />
        )
    }

}
export default Contact;