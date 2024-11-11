import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './TripleDES.css';
import Navbar from "../common/Navbar";
import OtherTools from "./OtherTools";

const TripleDESTool = () => {
  // States for Triple DES encryption and decryption
  const [plainText, setPlainText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [encryptedOutput, setEncryptedOutput] = useState('');
  const [decryptedOutput, setDecryptedOutput] = useState('');
  const [inputType, setInputType] = useState('plaintext');
  const [keyFormat, setKeyFormat] = useState('plaintext');
  const [functionType, setFunctionType] = useState('3DES');
  const [mode, setMode] = useState('ECB');
  const [autoDetect, setAutoDetect] = useState(true);

  // Encrypt text using Triple DES
  const encryptText = () => {
    try {
      const encrypted = CryptoJS.TripleDES.encrypt(plainText, encryptionKey).toString();
      setEncryptedOutput(encrypted);
      setDecryptedOutput('');
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
      <Navbar />
      <div className="triple-des-tool">
        <OtherTools />

        <div className="content-section">
          <div className="info-section">
            <h2>Triple DES Encryption and Decryption Tool</h2>
            <p>Triple DES or DESede , a symmetric-key algorithm for the  encryption of electronic data, is the successor of DES(Data Encryption Standard) and provides more secure encryption than DES. The Triple DES breaks the user-provided key into three subways as k1, k2, and k3. A message is  encrypted with k1 first, then decrypted with k2 and encrypted again with k3. The DESede key size is 128 or 192 bit and blocks size 64 bit. There are 2 modes of operation—Triple ECB (Electronic Code Book) and Triple CBC (Cipher Block Chaining).</p>
          </div>

          <div className="triple-des-section">
            <h2>Triple DES Encryptor</h2>
            
            <label>Input Type:</label>
            <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
              <option value="plaintext">Text</option>
              <option value="hex">Hex</option>
            </select>

            <label>Input Text:</label>
            <textarea
              value={plainText}
              onChange={(e) => setPlainText(e.target.value)}
              placeholder="Enter plain text to encrypt"
            />

            <label>Function:</label>
            <select value={functionType} onChange={(e) => setFunctionType(e.target.value)}>
              <option value="3DES">3DES</option>
              {/* Add more options if needed */}
            </select>

            <label>Mode:</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="ECB">ECB (electronic codebook)</option>
              {/* Add more options if needed */}
            </select>

            <label>Key:</label>
            <input
              type="text"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
              placeholder="Enter encryption key"
            />

            <div>
              <input
                type="radio"
                checked={keyFormat === 'plaintext'}
                onChange={() => setKeyFormat('plaintext')}
              /> Plaintext
              <input
                type="radio"
                checked={keyFormat === 'hex'}
                onChange={() => setKeyFormat('hex')}
              /> Hex
            </div>

            <button onClick={encryptText}>Encrypt</button>
            <div>
              <label>Encrypted Output:</label>
              <textarea readOnly value={encryptedOutput} placeholder="Encrypted text will appear here" />
            </div>
          </div>

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
