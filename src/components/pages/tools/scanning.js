import React from 'react';
import amass from '../../Assets/amass.jpg';
import legion from '../../Assets/legion.jpg';
import nmapImage from '../../Assets/nmap.jpg';
import Navbar from '../../common/Navbar';
import '../tools/scanning.css'; // Create a new CSS file for custom styles

const Scanning = () => {
  return (
    <div className="tool-details-page">
      <Navbar />
      <div className="content-container">
        <h1 className="tool-title">Scanning Tools</h1>
        <p className="tool-description">
          Discover powerful scanning tools used in penetration testing to identify network vulnerabilities, services, and much more.
        </p>

        <div className="tool-list">
          <div className="tool-item">
            <img
              src={nmapImage} // Use the imported image
              alt="Nmap"
              className="tool-image"
            />
            <h2 className="tool-name">Nmap</h2>
            <p className="tool-info">
              Nmap is a network scanner that identifies open ports, running services, and network topology.
            </p>
            <a href="https://www.kali.org/tools/nmap" className="download-btn">Download Nmap</a>
          </div>

          <div className="tool-item">
            <img
              src={legion} // Add appropriate image for Legion
              alt="Legion"
              className="tool-image"
            />
            <h2 className="tool-name">Legion</h2>
            <p className="tool-info">
              Legion is a GUI-based network reconnaissance tool that automates several penetration testing tasks.
            </p>
            <a href="https://www.kali.org/tools/legion/" className="download-btn">Download Legion</a>
          </div>

          <div className="tool-item">
            <img
              src={amass} // Add appropriate image for Amass
              alt="Amass"
              className="tool-image"
            />
            <h2 className="tool-name">Amass</h2>
            <p className="tool-info">
              Amass is used for network mapping and asset discovery, helping to identify attack surface areas.
            </p>
            <a href="https://www.kali.org/tools/amass" className="download-btn">Download Amass</a>
          </div>
        </div>
      </div>

      {/* Footer like CyberTools */}
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

export default Scanning;
