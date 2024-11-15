// src/components/pages/tools/MaintainingAccess.js
import React from 'react';
import Navbar from '../../common/Navbar';
import '../../pages/tools/MaintainingAccess.css'; // Create a CSS file for maintaining access styles
import msfvenomImage from '../../Assets/msfvenom.jpg';
import payloadsImage from '../../Assets/paylods.png';
import msfpcImage from '../../Assets/msfpc.jpg';

const MaintainingAccess = () => {
  return (
    <div className="tool-details-page">
      <Navbar />
      <div className="content-container">
        <h1 className="tool-title">Maintaining Access Tools</h1>
        <p className="tool-description">
          Learn about key tools used in maintaining access to compromised systems, ensuring ongoing connectivity and control for extended operations.
        </p>

        <div className="tool-list">
          <div className="tool-item">
            <img
              src={msfvenomImage}
              alt="Msfvenom"
              className="tool-image"
            />
            <h2 className="tool-name">Msfvenom</h2>
            <p className="tool-info">
              Msfvenom is a payload generator that combines msfpayload and msfencode,to create and obfuscate various payloads.
            </p>
            <a href="https://www.kali.org/tools/msfvenom/" className="download-btn">Download Msfvenom</a>
          </div>

          <div className="tool-item">
            <img
              src={payloadsImage}
              alt="PayloadsAllTheThings"
              className="tool-image"
            />
            <h2 className="tool-name">PayloadsAllTheThings</h2>
            <p className="tool-info">
              PayloadsAllTheThings is a collection of payloads and bypass techniques, exploiting various vulnerabilities.
            </p>
            <a href="https://github.com/swisskyrepo/PayloadsAllTheThings" className="download-btn">Download PayloadsAllTheThings</a>
          </div>

          <div className="tool-item">
            <img
              src={msfpcImage}
              alt="Msfpc"
              className="tool-image"
            />
            <h2 className="tool-name">Msfpc</h2>
            <p className="tool-info">
              Msfpc (MSFvenom Payload Creator) simplifies the process of creating custom payloads for various operating systems and environments.
            </p>
            <a href="https://github.com/g0tmi1k/msfpc" className="download-btn">Download Msfpc</a>
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

export default MaintainingAccess;
