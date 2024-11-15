import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
import './NetworkSecurity.css';
import Navbar from '../common/Navbar';

const NetworkSecurity = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(50); // Set initial progress
  const [openCertificate, setOpenCertificate] = useState(false);
  const studentName = "John Doe"; // Replace with dynamic student name if needed

  const handleNextModule = () => {
    navigate('/cyber-threats'); // Adjust the next module link
  };

  const generateContentPDF = () => {
    const doc = new jsPDF();
    doc.text("Network Security", 10, 10);
    doc.text(
      "Network security consists of policies and practices adopted to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources.",
      10, 20
    );
    doc.text("Core Concepts of Network Security:", 10, 40);
    doc.text("1. Firewalls: Act as a barrier between trusted and untrusted networks, filtering incoming and outgoing traffic.", 10, 50);
    doc.text("2. Intrusion Detection Systems (IDS): Monitor network traffic for suspicious activity and alert administrators.", 10, 60);
    doc.text("3. Intrusion Prevention Systems (IPS): Similar to IDS, but can also take action to prevent the threat.", 10, 70);
    doc.text("4. Virtual Private Networks (VPNs): Secure network connections over the internet, protecting data in transit.", 10, 80);
    doc.text("Advanced Network Security Strategies:", 10, 100);
    doc.text("1. Network Segmentation: Dividing a network into smaller segments to reduce the impact of a breach.", 10, 110);
    doc.text("2. Zero Trust Architecture: Never trust, always verify - even inside the network perimeter.", 10, 120);
    doc.text("3. Security Information and Event Management (SIEM): Aggregates and analyzes activity from different resources across the network.", 10, 130);
    doc.text("4. Endpoint Security: Protects network endpoints such as computers and mobile devices from cyber threats.", 10, 140);
    doc.text("Emerging Threats in Network Security:", 10, 160);
    doc.text("1. Advanced Persistent Threats (APTs): Prolonged and targeted cyberattacks aimed at stealing data or monitoring activity.", 10, 170);
    doc.text("2. Distributed Denial of Service (DDoS): Overwhelms a network or service with excessive traffic, causing disruptions.", 10, 180);
    doc.text("3. IoT Vulnerabilities: Internet of Things devices often have weak security, making them targets for attackers.", 10, 190);
    doc.text("4. Cloud Security Risks: As more organizations move to the cloud, ensuring the security of cloud environments becomes critical.", 10, 200);
    doc.text("Mitigation Techniques:", 10, 220);
    doc.text("1. Regular Updates and Patching: Keep software and hardware up-to-date to protect against known vulnerabilities.", 10, 230);
    doc.text("2. Strong Authentication Mechanisms: Use multi-factor authentication and strong passwords.", 10, 240);
    doc.text("3. Employee Training: Educate staff on recognizing and preventing network security threats.", 10, 250);
    doc.text("4. Regular Security Audits: Conduct frequent reviews of network security measures to identify and fix vulnerabilities.", 10, 260);
    doc.save("NetworkSecurity.pdf");
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(30);
    doc.setTextColor(0, 49, 83); // Dark blue color
    doc.text('Certificate of Completion', 105, 40, { align: 'center' });

    doc.setDrawColor(0, 49, 83);
    doc.setLineWidth(5);
    doc.rect(10, 10, 190, 277);

    doc.setFontSize(20);
    doc.text('This is to certify that', 105, 90, { align: 'center' });

    doc.setFontSize(24);
    doc.setTextColor(45, 129, 247); // Highlight student's name with a blue color
    doc.text(studentName, 105, 120, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); 
    doc.text('Has successfully completed the', 105, 150, { align: 'center' });
    doc.setFontSize(18);
    doc.text('Network Security course', 105, 170, { align: 'center' });

    doc.setFontSize(14);
    doc.text('Issued on: ' + new Date().toLocaleDateString(), 105, 200, { align: 'center' });

    doc.setFontSize(12);
    doc.text('Instructor: Jane Smith', 105, 230, { align: 'center' });
    doc.text('Cybersecurity Course Lead', 105, 240, { align: 'center' });

    doc.save('certificate_of_completion.pdf');
  };

  const handleCompleteCourse = () => {
    setOpenCertificate(true); // Open the certificate modal
  };

  const handleCloseCertificate = () => {
    setOpenCertificate(false); // Close the certificate modal
  };

  return (
    <div>
        <Navbar/>
    <div className="container">
      <h3 className="title">Network Security</h3>
      <p className="subtitle">
        Understand the key concepts and strategies of network security to protect your infrastructure.
      </p>

      <div className="content-box">
        <h5 className="section-title">Core Concepts of Network Security</h5>
        <ul className="list">
          <li className="list-item">
            <strong>Firewalls:</strong> Act as a barrier between trusted and untrusted networks, filtering incoming and outgoing traffic.
          </li>
          <li className="list-item">
            <strong>Intrusion Detection Systems (IDS):</strong> Monitor network traffic for suspicious activity and alert administrators.
          </li>
          <li className="list-item">
            <strong>Intrusion Prevention Systems (IPS):</strong> Similar to IDS, but can also take action to prevent the threat.
          </li>
          <li className="list-item">
            <strong>Virtual Private Networks (VPNs):</strong> Secure network connections over the internet, protecting data in transit.
          </li>
        </ul>

        <h6 className="progress-title">Your Progress:</h6>
        <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>

        </div>

        <div className="button-group">
          <button className="button primary" onClick={handleNextModule}>Continue to Next Module</button>
          <button className="button secondary" onClick={generateContentPDF}>Download PDF</button>
        </div>

        <div className="button-group">
          <button className="button primary" onClick={handleCompleteCourse}>Complete Course and Get Certificate</button>
        </div>

        {openCertificate && (
          <div className="dialog">
            <div className="dialog-content">
              <h6 className="dialog-title">Certificate</h6>
              <p>Congratulations on completing the course!</p>
              <div className="dialog-actions">
                <button className="button" onClick={handleCloseCertificate}>Close</button>
                <button className="button" onClick={generatePDF}>Download Certificate</button>
              </div>
            </div>
          </div>
        )}
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

export default NetworkSecurity;