import React, { useState } from "react";
import CryptoJS from "crypto-js";
import './EncryptImageOnline.css';
import Navbar from "../common/Navbar";
import OtherTools from "./OtherTools";

const EncryptImageOnline = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [encryptedImage, setEncryptedImage] = useState("");
  const [decryptedImage, setDecryptedImage] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [useCustomKey, setUseCustomKey] = useState(false);

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 6 * 1024 * 1024) { // Ensure file size is <= 6MB
      setSelectedFile(file);
    } else {
      alert("File size exceeds 6MB limit");
    }
  };

  // Encryption Function
  const handleEncryption = () => {
    if (!selectedFile) {
      alert("Please select an image file to encrypt.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result.split(",")[1];
      const key = useCustomKey && secretKey ? secretKey : "defaultKey";
      const encrypted = CryptoJS.AES.encrypt(base64Image, key).toString();
      setEncryptedImage(encrypted);
    };
    reader.readAsDataURL(selectedFile);
  };

  // Decryption Function
  const handleDecryption = () => {
    if (!encryptedImage) {
      alert("Please encrypt an image first or paste an encrypted image string.");
      return;
    }
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedImage, secretKey).toString(CryptoJS.enc.Utf8);
      if (!decrypted) throw new Error("Invalid key or corrupted data.");
      setDecryptedImage(`data:image/png;base64,${decrypted}`);
    } catch (error) {
      alert("Decryption failed. Please check the secret key or encrypted data.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="encrypt-image-page">
        <OtherTools /> {/* Include OtherTools component on the left side */}
        
        <div className="encryption-decryption-container">
          {/* Information Section */}
          <div className="info-section">
            <h2>Online Image Encryption and Decryption Tool</h2>
            <p>
              This tool encrypts and decrypts any image instantly for free. It supports encryption of all image formats such as .png, .jpeg, .jpg, .gif, etc.
              It’s recommended to supply a custom secret key while encrypting the image for utmost security.
              Also, you can use this tool for encrypting and decrypting any text.
              Recently, we upgraded our system and increased the file upload size limit to 6 MB from 1 MB previously.
            </p>
          </div>

          <div className="encrypt-section">
            <h2>Encrypt Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div>
              <input
                type="checkbox"
                checked={useCustomKey}
                onChange={() => setUseCustomKey(!useCustomKey)}
              />
              <label>Encrypt with a secret key</label>
            </div>
            {useCustomKey && (
              <input
                type="text"
                placeholder="Enter secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            )}
            <button onClick={handleEncryption}>Encrypt</button>
            {encryptedImage && (
              <textarea
                readOnly
                placeholder="Encrypted Image Output"
                value={encryptedImage}
              />
            )}
          </div>

          <div className="decrypt-section">
            <h2>Decrypt Image</h2>
            <textarea
              placeholder="Paste Encrypted Image String"
              value={encryptedImage}
              onChange={(e) => setEncryptedImage(e.target.value)}
            />
            <div>
              <input
                type="checkbox"
                checked={useCustomKey}
                onChange={() => setUseCustomKey(!useCustomKey)}
              />
              <label>Decryption requires a custom secret key</label>
            </div>
            {useCustomKey && (
              <input
                type="text"
                placeholder="Enter secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            )}
            <button onClick={handleDecryption}>Decrypt</button>
            {decryptedImage && (
              <div>
                <h3>Decrypted Image</h3>
                <img src={decryptedImage} alt="Decrypted" />
              </div>
            )}
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

export default EncryptImageOnline;
