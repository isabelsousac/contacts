const getContacts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log( {data} )
        return data
    } catch(e: any) {
        console.log(e.message)
    }
}

export default getContacts;