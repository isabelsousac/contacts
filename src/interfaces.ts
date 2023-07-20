export interface Contact {
    id: number,
    name: string,
    username: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

interface Address {
    street: string,
    suite: string,
    city: string,
    geo: Geo
}

interface Geo {
    lat: string,
    lng: string
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}