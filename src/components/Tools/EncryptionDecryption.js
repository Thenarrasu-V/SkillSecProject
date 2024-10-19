import React, { useState } from "react";
import CryptoJS from "crypto-js";
import './EncryptionDecryption.css';

const EncryptionDecryption = () => {
  const [textToEncrypt, setTextToEncrypt] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [textToDecrypt, setTextToDecrypt] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [useCustomKey, setUseCustomKey] = useState(false);

  // Encryption Function
  const handleEncryption = () => {
    if (useCustomKey && secretKey) {
      const encrypted = CryptoJS.AES.encrypt(textToEncrypt, secretKey).toString();
      setEncryptedText(encrypted);
    } else {
      const encrypted = CryptoJS.AES.encrypt(textToEncrypt, "defaultKey").toString();
      setEncryptedText(encrypted);
    }
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
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "50px" }}>
      <div style={{ width: "45%" }}>
        <h2>Text Encryption</h2>
        <textarea
          placeholder="Enter any text to be Encrypted"
          value={textToEncrypt}
          onChange={(e) => setTextToEncrypt(e.target.value)}
          style={{ width: "100%", height: "100px" }}
        />
        <div>
          <input
            type="checkbox"
            checked={useCustomKey}
            onChange={() => setUseCustomKey(!useCustomKey)}
          />
          <label>Encrypt with a custom secret key</label>
        </div>
        {useCustomKey && (
          <input
            type="text"
            placeholder="Enter Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            style={{ width: "100%", margin: "10px 0" }}
          />
        )}
        <button onClick={handleEncryption}>Encrypt</button>
        <textarea
          readOnly
          placeholder="Encrypted Output"
          value={encryptedText}
          style={{ width: "100%", height: "100px", marginTop: "10px" }}
        />
      </div>

      <div style={{ width: "45%" }}>
        <h2>Text Decryption</h2>
        <textarea
          placeholder="Enter Encrypted Text to Decrypt"
          value={textToDecrypt}
          onChange={(e) => setTextToDecrypt(e.target.value)}
          style={{ width: "100%", height: "100px" }}
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
            placeholder="Enter Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            style={{ width: "100%", margin: "10px 0" }}
          />
        )}
        <button onClick={handleDecryption}>Decrypt</button>
        <textarea
          readOnly
          placeholder="Decrypted Text"
          value={decryptedText}
          style={{ width: "100%", height: "100px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default EncryptionDecryption;
