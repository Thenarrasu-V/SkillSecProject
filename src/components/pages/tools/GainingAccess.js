import React from 'react';
import Navbar from '../../common/Navbar';
import '../tools/GainingAccess.css'; // Create a CSS file for gaining access styles
import metasploitImage from '../../Assets/metasploit.jpg';
import beefImage from '../../Assets/beef.png';
import legionImage from '../../Assets/legion.jpg';

const GainingAccess = () => {
  return (
    <div className="tool-details-page">
      <Navbar />
      <div className="content-container">
        <h1 className="tool-title">Gaining Access Tools</h1>
        <p className="tool-description">
          Explore tools used in penetration testing to gain access to systems by exploiting vulnerabilities.
        </p>

        <div className="tool-list">
          <div className="tool-item">
            <img
              src={metasploitImage}
              alt="Metasploit"
              className="tool-image"
            />
            <h2 className="tool-name">Metasploit</h2>
            <p className="tool-info">
              Metasploit is a powerful framework for developing and executing exploit code against a remote target machine.
            </p>
            <a href="https://www.metasploit.com/" className="download-btn">Download Metasploit</a>
          </div>

          <div className="tool-item">
            <img
              src={beefImage}
              alt="BeEF"
              className="tool-image"
            />
            <h2 className="tool-name">BeEF</h2>
            <p className="tool-info">
              BeEF (Browser Exploitation Framework) is focused on exploiting vulnerabilities in the web browser to gain control.
            </p>
            <a href="https://www.kali.org/tools/beef/" className="download-btn">Download BeEF</a>
          </div>

          <div className="tool-item">
            <img
              src={legionImage}
              alt="Legion"
              className="tool-image"
            />
            <h2 className="tool-name">Legion</h2>
            <p className="tool-info">
              Legion is an extensible network penetration testing tool that automates the process of discovering and exploiting vulnerabilities.
            </p>
            <a href="https://sourceforge.net/projects/legion/" className="download-btn">Download Legion</a>
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

export default GainingAccess;
