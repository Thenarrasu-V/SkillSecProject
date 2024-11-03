import React, { useState } from "react";
import CryptoJS from "crypto-js";
import './FileEncryptionDecryption.css';
import Navbar from "../common/Navbar";
import OtherTools from "./OtherTools"; // Import the OtherTools component

const FileEncryptionDecryption = () => {
  const [fileToEncrypt, setFileToEncrypt] = useState(null);
  const [secretKey, setSecretKey] = useState("");
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [fileToDecrypt, setFileToDecrypt] = useState(null);
  const [decryptedData, setDecryptedData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileEncryption = () => {
    if (!fileToEncrypt || !secretKey) {
      alert("Please provide a file and a secret key.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event.target.result;
      const encrypted = CryptoJS.AES.encrypt(fileData, secretKey).toString();
      
      const blob = new Blob([encrypted], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${fileToEncrypt.name}.encr`; // Save with .encr extension
      link.click();
    };
    
    reader.readAsArrayBuffer(fileToEncrypt);
  };

  const handleFileDecryption = () => {
    if (!fileToDecrypt || !secretKey) {
      alert("Please provide a file and a secret key.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const encryptedData = event.target.result;
      const decrypted = CryptoJS.AES.decrypt(encryptedData.toString(), secretKey).toString(CryptoJS.enc.Utf8);

      if (!decrypted) {
        setErrorMessage("Wrong decryption key.");
        setDecryptedData("");
      } else {
        const blob = new Blob([decrypted], { type: 'application/pdf' }); // Change type based on your original file type
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "decrypted_file.pdf"; // Adjust the name as necessary
        link.click();
        setErrorMessage("");
      }
    };
    
    reader.readAsText(fileToDecrypt);
  };

  return (
    <div>
      <Navbar />
      <div className="file-encryption-decryption-page">
        <OtherTools className="other-tools-container" />

        <div className="file-encryption-decryption-container">
          <div className="file-encryption-section">
            <h2>File Encryption</h2>
            <input
              type="file"
              onChange={(e) => setFileToEncrypt(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Enter Secret Key"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
            <button onClick={handleFileEncryption}>Encrypt</button>
            {encryptedFile && <textarea readOnly value={encryptedFile} />}
          </div>

          <div className="file-decryption-section">
            <h2>File Decryption</h2>
            <input
              type="file"
              onChange={(e) => setFileToDecrypt(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Enter Secret Key"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
            <button onClick={handleFileDecryption}>Decrypt</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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

export default FileEncryptionDecryption;
