import React from 'react';
import Navbar from '../common/Navbar';
import './CyberTools.css';

// Import images
import coveringTracksImage from '../Assets/covering-tracks.jpg';
import gainingAccessImage from '../Assets/gaining-access.jpg';
import maintainingAccessImage from '../Assets/maintaining-access.jpg';
import reconnaissanceImage from '../Assets/reconnaissance.jpg';
import scanningImage from '../Assets/scanning.jpg';

const toolsData = [
  {
    title: 'Reconnaissance',
    description: `Reconnaissance is the first critical phase in penetration testing, focused on collecting as much information as possible about the target system...`,
    image: reconnaissanceImage,
    exploreLink: '/Reconnaissance'
  },
  {
    title: 'Scanning',
    description: `After reconnaissance, the scanning phase delves deeper by actively probing the network to identify open ports, services running on those ports...`,
    image: scanningImage,
    exploreLink: '/scanning'
  },
  {
    title: 'Gaining Access',
    description: `Gaining access involves exploiting vulnerabilities identified in the scanning phase to enter the system. This phase simulates real-world attacks...`,
    image: gainingAccessImage,
    exploreLink: '/gaining-access'
  },
  {
    title: 'Maintaining Access',
    description: `Once initial access is achieved, penetration testers use tools and techniques to maintain their connection to the system...`,
    image: maintainingAccessImage,
    exploreLink: '/maintaining-access'
  },
  {
    title: 'Covering Tracks',
    description: `The final stage, covering tracks, involves simulating methods attackers use to erase evidence of their presence in the system...`,
    image: coveringTracksImage,
    exploreLink: '/covering-tracks'
  },
];

const CyberTools = () => {
  return (
    <div>
      <Navbar className="cybertools-navbar" />
    <div className="cybertools-page">
      <br></br>
      <h1 className="cybertools-main-title">Cybersecurity Tools for Penetration Testing</h1>
      <p className="cybertools-main-description">
        Explore essential tools used in each stage of penetration testing, from reconnaissance to covering tracks, to understand how cybersecurity professionals assess and secure systems.
      </p><br></br>
      
      <div className="cybertools-section">
      {toolsData.map((tool, index) => (
        <div key={index} className="cybertools-tool">
          <img src={tool.image} alt={tool.title} className="cybertools-image" />
          <div className="cybertools-details">
            <h2 className="cybertools-title">{tool.title}</h2>
            <p className="cybertools-description">{tool.description}</p>
            <a href={tool.exploreLink} className="cybertools-explore">
              Explore Tool
            </a>
          </div>
        </div>
      ))}      
      </div><br></br>

    </div>
      <footer className="footer">
        <p>© 2024 SkillSec. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About SkillSec</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div><br></br>
      </footer>
    </div>
  );
};

export default CyberTools;
