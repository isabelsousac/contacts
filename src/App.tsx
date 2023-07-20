import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ContactsComponent from './components/Contacts';

function App() {
  return (
    <div className="App">
      <User/>
      <ContactsComponent/>
    </div>
  );
}

export default App;
