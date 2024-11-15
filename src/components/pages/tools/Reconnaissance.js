import React from 'react';
import dmitryImage from '../../Assets/dmitry.jpg';
import ikeScanImage from '../../Assets/ike-scan.jpg';
import reconNgImage from '../../Assets/recon-ng.jpg';
import Navbar from '../../common/Navbar';
import './Reconnaissance'; // Create a CSS file for reconnaissance styles

const Reconnaissance = () => {
  return (
    <div className="tool-details-page">
      <Navbar />
      <div className="content-container">
        <h1 className="tool-title">Reconnaissance Tools</h1>
        <p className="tool-description">
          Explore advanced reconnaissance tools that allow penetration testers to gather critical information about target systems.
        </p>

        <div className="tool-list">
          <div className="tool-item">
            <img
              src={reconNgImage}
              alt="Recon-ng"
              className="tool-image"
            />
            <h2 className="tool-name">Recon-ng</h2>
            <p className="tool-info">
              Recon-ng is a full-featured Web Reconnaissance framework written in Python. It offers a powerful platform for data collection.
            </p>
            <a href="https://www.kali.org/tools/recon-ng/" className="download-btn">Download Recon-ng</a>
          </div>

          <div className="tool-item">
            <img
              src={dmitryImage}
              alt="Dmitry"
              className="tool-image"
            />
            <h2 className="tool-name">Dmitry</h2>
            <p className="tool-info">
              Dmitry (Deepmagic Information Gathering Tool) is used for performing network scans, gathering subdomains, email addresses, and more.
            </p>
            <a href="https://www.kali.org/tools/dmitry/" className="download-btn">Download Dmitry</a>
          </div>

          <div className="tool-item">
            <img
              src={ikeScanImage}
              alt="Ike-scan"
              className="tool-image"
            />
            <h2 className="tool-name">Ike-scan</h2>
            <p className="tool-info">
              Ike-scan is a network tool that discovers, fingerprint, and identifies VPN servers supporting the Internet Key Exchange protocol.
            </p>
            <a href="https://www.kali.org/tools/ike-scan/" className="download-btn">Download Ike-scan</a>
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

export default Reconnaissance;
