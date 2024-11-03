import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './TripleDES.css';
import Navbar from "../common/Navbar"; // Import Navbar component
import OtherTools from "./OtherTools"; // Import OtherTools component

const TripleDESTool = () => {
  // States for Triple DES encryption and decryption
  const [plainText, setPlainText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [encryptedOutput, setEncryptedOutput] = useState('');
  const [decryptedOutput, setDecryptedOutput] = useState('');

  // Encrypt text using Triple DES
  const encryptText = () => {
    try {
      const encrypted = CryptoJS.TripleDES.encrypt(plainText, encryptionKey).toString();
      setEncryptedOutput(encrypted);
      setDecryptedOutput(''); // Clear decrypted output on new encryption
    } catch (error) {
      console.error("Encryption failed:", error);
      setEncryptedOutput('Encryption failed. Check the inputs.');
    }
  };

  // Decrypt text using Triple DES
  const decryptText = () => {
    try {
      const decrypted = CryptoJS.TripleDES.decrypt(encryptedOutput, encryptionKey);
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      setDecryptedOutput(decryptedText || 'Decryption failed. Incorrect key or input.');
    } catch (error) {
      console.error("Decryption failed:", error);
      setDecryptedOutput('Decryption failed. Check the inputs.');
    }
  };

  return (
    <div>
      <Navbar /> {/* Navbar component */}

      <div className="triple-des-tool">
        <OtherTools /> {/* Sidebar for other tools */}

        <div className="content-section">
          {/* Information Section */}
          <div className="info-section">
            <h2>Triple DES Encryption and Decryption Tool</h2>
            <p>
              Triple DES (3DES) is an encryption algorithm that applies the DES cipher three times to each data block. 
              It provides a relatively high level of security compared to DES by encrypting the same data block multiple times.
            </p>
          </div>

          {/* Triple DES Encryption Section */}
          <div className="triple-des-section">
            <h2>Triple DES Encryptor</h2>
            <label>Enter Plain Text to Encrypt</label>
            <textarea
              value={plainText}
              onChange={(e) => setPlainText(e.target.value)}
              placeholder="Enter plain text to encrypt"
            />
            <label>Enter Encryption Key</label>
            <input
              type="text"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
              placeholder="Enter encryption key"
            />
            <button onClick={encryptText}>Encrypt</button>
            <div>
              <label>Encrypted Output:</label>
              <textarea readOnly value={encryptedOutput} placeholder="Encrypted text will appear here" />
            </div>
          </div>

          {/* Triple DES Decryption Section */}
          <div className="triple-des-section">
            <h2>Triple DES Decryptor</h2>
            <label>Enter Encrypted Text</label>
            <textarea
              value={encryptedOutput}
              onChange={(e) => setEncryptedOutput(e.target.value)}
              placeholder="Paste encrypted text here to decrypt"
            />
            <label>Enter Decryption Key</label>
            <input
              type="text"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
              placeholder="Enter decryption key"
            />
            <button onClick={decryptText}>Decrypt</button>
            <div>
              <label>Decrypted Output:</label>
              <textarea readOnly value={decryptedOutput} placeholder="Decrypted text will appear here" />
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

export default TripleDESTool;
