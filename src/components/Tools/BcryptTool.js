import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import './BcryptTool.css';
import Navbar from "../common/Navbar"; // Import Navbar component
import OtherTools from "./OtherTools"; // Import OtherTools component

const BcryptTool = () => {
  // States for Bcrypt Hash Generator
  const [plainText, setPlainText] = useState('');
  const [saltRounds, setSaltRounds] = useState(4);
  const [hashedOutput, setHashedOutput] = useState('');

  // States for Bcrypt Hashed Matcher
  const [hashedPassword, setHashedPassword] = useState('');
  const [plainTextMatch, setPlainTextMatch] = useState('');
  const [matchResult, setMatchResult] = useState('');

  // Generate bcrypt hash
  const generateHash = () => {
    const salt = bcrypt.genSaltSync(Number(saltRounds));
    const hash = bcrypt.hashSync(plainText, salt);
    setHashedOutput(hash);
  };

  // Match bcrypt hash
  const matchHash = () => {
    const isMatch = bcrypt.compareSync(plainTextMatch, hashedPassword);
    setMatchResult(isMatch ? 'Password matches!' : 'Password does not match.');
  };

  return (
    <div>
      <Navbar /> {/* Navbar component */}

      <div className="bcrypt-tool">
        <OtherTools /> {/* Sidebar for other tools */}

        <div className="content-section">
          {/* Information Section at the very top */}
          <div className="info-section">
            <h2>Bcrypt Hash Generator and Matcher Online</h2>
            <p>
              As per wiki, Bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher. 
              Bcrypt uses an adaptive hash algorithm to store passwords, which is a one-way hash of the password. 
              BCrypt internally generates a random salt while encoding passwords and stores that salt along with the encrypted password. 
              Hence, it is obvious to get different encoded results for the same string. 
              But one common thing is that every time it generates a string of length 60.
            </p>
          </div>

          {/* Bcrypt Hash Generator Section */}
          <div className="bcrypt-section">
            <h2>Bcrypt Hash Generator</h2>
            <label>Enter plain text to hash</label>
            <textarea
              value={plainText}
              onChange={(e) => setPlainText(e.target.value)}
              placeholder="Enter plain text to hash"
            />
            <label>Select the number of Salt Rounds</label>
            <input
              type="number"
              min="4"
              max="12"
              value={saltRounds}
              onChange={(e) => setSaltRounds(e.target.value)}
            />
            <button onClick={generateHash}>Generate</button>
            <div>
              <label>Hashed Output:</label>
              <textarea readOnly value={hashedOutput} placeholder="Result goes here" />
            </div>
          </div>

          {/* Bcrypt Hashed Matcher Section */}
          <div className="bcrypt-section">
            <h2>Bcrypt Hashed Matcher</h2>
            <label>Enter the Bcrypt Hashed Password</label>
            <textarea
              value={hashedPassword}
              onChange={(e) => setHashedPassword(e.target.value)}
              placeholder="Bcrypt Hashed Password"
            />
            <label>Enter the Plain Text Password</label>
            <textarea
              value={plainTextMatch}
              onChange={(e) => setPlainTextMatch(e.target.value)}
              placeholder="Plain text to match"
            />
            <button onClick={matchHash}>Match</button>
            <div>
              <label>Result:</label>
              <textarea readOnly value={matchResult} placeholder="Result goes here" />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 SkillSec. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About SkillSec</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default BcryptTool;
