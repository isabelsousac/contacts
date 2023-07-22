import './App.css';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header/>

        <div className='center-container'>
          <Routes>
            <Route
              path="/"
              element={ <Navigate to="/contacts" /> }
            />
            <Route
              path="/contacts"
              element={<Home />}
            />

            <Route
              path="/contacts/all"
              element={<Contacts />}
            />

            <Route
              path="/contacts/contact/:id"
              element={<Contact />}
            />

            <Route
              path="/contacts/404"
              element={<PageNotFound />}
            />
          </Routes>

        </div>

        <Divider role="presentation" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

