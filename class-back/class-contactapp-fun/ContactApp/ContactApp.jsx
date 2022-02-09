import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
let ContactApp = () => {
    let [contacts, setContacts] = useState([])
    //useEffect();
    //useEffect(() => { });
    //useEffect(() => { }, [])
    useEffect(() => {
        console.log("Test Case 123")
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                setContacts(response.data)
            })
            .catch();
        return () => {
            //componentWillUnmount
            console.log("Final/Death")
        }

    }, [])
    return <>
        <h1>Contact App</h1>
        <pre>{JSON.stringify(contacts)}</pre>
        {
            contacts.length > 0 ? <> <ContactList myList={contacts} /></> : null
        }

    </>
}
export default ContactApp;