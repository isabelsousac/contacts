import { Contact } from './interfaces';

export const getContacts = async (): Promise<Contact[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        return [];
    }
}

export const getContactById = async (contactId: string): Promise<Contact | null> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`);
        const data = await response.json();
        return data;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        return null;
    }
}