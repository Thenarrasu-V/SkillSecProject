import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LandingPage from './components/pages/landingpage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import EncryptionDecryption from './components/Tools/EncryptionDecryption';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;