import React, { useState } from "react";
import CryptoJS from "crypto-js";
import './EncryptionDecryption.css';
import Navbar from "../common/Navbar";
import OtherTools from "./OtherTools"; // Import the OtherTools component

const EncryptionDecryption = () => {
  const [textToEncrypt, setTextToEncrypt] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [textToDecrypt, setTextToDecrypt] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [useEncryptionKey, setUseEncryptionKey] = useState(false);
  const [useDecryptionKey, setUseDecryptionKey] = useState(false);

  // Encryption Function
  const handleEncryption = () => {
    const key = useEncryptionKey && secretKey ? secretKey : "defaultKey";
    const encrypted = CryptoJS.AES.encrypt(textToEncrypt, key).toString();
    setEncryptedText(encrypted);
  };

  // Decryption Function
  const handleDecryption = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(textToDecrypt, secretKey).toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted || "Invalid Key or Text");
    } catch (error) {
      setDecryptedText("Decryption failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="encryption-decryption-page">
        <OtherTools className="other-tools-container" /> {/* Display OtherTools on the left */}
  
        <div className="encryption-decryption-container">
          {/* Information Section */}
          <div className="info-section">
            <h2>Online Encryption and Decryption Tool</h2>
            <p>
              This online tool provides encryption and decryption of any text with a random key. 
              This tool uses a random key which nobody knows and hence provides the utmost security 
              of any text that you want to protect.
            </p>
          </div>
  
          <div className="encryption-section">
            <h2>Text Encryption</h2>
            <textarea
              placeholder="Enter any text to be Encrypted"
              value={textToEncrypt}
              onChange={(e) => setTextToEncrypt(e.target.value)}
            />
            <div>
              <input
                type="checkbox"
                checked={useEncryptionKey}
                onChange={() => setUseEncryptionKey(!useEncryptionKey)}
              />
              <label>Encrypt with a custom secret key</label>
            </div>
            {useEncryptionKey && (
              <input
                type="text"
                placeholder="Enter Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            )}
            <button onClick={handleEncryption}>Encrypt</button>
            <textarea
              readOnly
              placeholder="Encrypted Output"
              value={encryptedText}
            />
          </div>
  
          <div className="decryption-section">
            <h2>Text Decryption</h2>
            <textarea
              placeholder="Enter Encrypted Text to Decrypt"
              value={textToDecrypt}
              onChange={(e) => setTextToDecrypt(e.target.value)}
            />
            <div>
              <input
                type="checkbox"
                checked={useDecryptionKey}
                onChange={() => setUseDecryptionKey(!useDecryptionKey)}
              />
              <label>Decryption requires a custom secret key</label>
            </div>
            {useDecryptionKey && (
              <input
                type="text"
                placeholder="Enter Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            )}
            <button onClick={handleDecryption}>Decrypt</button>
            <textarea
              readOnly
              placeholder="Decrypted Text"
              value={decryptedText}
            />
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
}

export default EncryptionDecryption;
