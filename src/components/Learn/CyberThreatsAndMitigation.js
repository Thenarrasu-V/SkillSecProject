import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import './CyberThreatsAndMitigation.css'; // Import the CSS file
import Navbar from '../common/Navbar';

const CyberThreatsAndMitigation = () => {
  const [progress, setProgress] = useState(0); // Track the progress
  const [openCertificate, setOpenCertificate] = useState(false);

  // Update progress based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollPosition / documentHeight) * 100;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const generateContentPDF = () => {
    const doc = new jsPDF();
    doc.text("Cyber Threats and Mitigation", 10, 10);
    doc.text(
      "Cyber threats are malicious acts that seek to damage data, steal data, or disrupt digital life in general. Mitigation strategies are essential to protect against these threats.",
      10, 20
    );
    doc.text("Common Cyber Threats:", 10, 40);
    doc.text("1. Phishing: Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.", 10, 50);
    doc.text("2. Malware: Software designed to disrupt, damage, or gain unauthorized access to computer systems.", 10, 60);
    doc.text("3. Ransomware: A type of malware that encrypts the victim's files, demanding a ransom for the decryption key.", 10, 70);
    doc.text("4. Denial-of-Service (DoS) Attacks: Attacks that aim to make a machine or network resource unavailable to its intended users.", 10, 80);
    doc.text("Mitigation Strategies:", 10, 100);
    doc.text("1. Regular Software Updates: Keep software and systems updated to protect against vulnerabilities.", 10, 110);
    doc.text("2. Strong Password Policies: Enforce the use of complex passwords and regular password changes.", 10, 120);
    doc.text("3. Multi-Factor Authentication (MFA): Add an extra layer of security beyond just a username and password.", 10, 130);
    doc.text("4. Security Awareness Training: Educate employees and users about recognizing and responding to cyber threats.", 10, 140);
    doc.text("Emerging Cyber Threats:", 10, 160);
    doc.text("1. AI-Driven Attacks: Attacks that leverage artificial intelligence to automate and improve the effectiveness of cyber threats.", 10, 170);
    doc.text("2. Internet of Things (IoT) Attacks: Exploiting vulnerabilities in connected devices to gain unauthorized access.", 10, 180);
    doc.text("3. Cloud Security Risks: As more organizations move to the cloud, ensuring security becomes a critical concern.", 10, 190);
    doc.save("CyberThreatsAndMitigation.pdf");
  };

  const generateCertificatePDF = () => {
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
    doc.text("John Doe", 105, 120, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); 
    doc.text('Has successfully completed the', 105, 150, { align: 'center' });
    doc.setFontSize(18);
    doc.text('Cyber Threats and Mitigation Course', 105, 170, { align: 'center' });

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
      <div className="box">
        <h4 className="title">Cyber Threats and Mitigation</h4>
        <p className="body-text">
          Cyber threats are malicious acts that seek to damage data, steal data, or disrupt digital life in general. Mitigation strategies are essential to protect against these threats.
        </p>
        <h6 className="subheading">Common Cyber Threats:</h6>
        <ul>
          <li className="body-text"><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.</li>
          <li className="body-text"><strong>Malware:</strong> Software designed to disrupt, damage, or gain unauthorized access to computer systems.</li>
          <li className="body-text"><strong>Ransomware:</strong> A type of malware that encrypts the victim's files, demanding a ransom for the decryption key.</li>
          <li className="body-text"><strong>Denial-of-Service (DoS) Attacks:</strong> Attacks that aim to make a machine or network resource unavailable to its intended users.</li>
        </ul>
        <h6 className="subheading">Mitigation Strategies:</h6>
        <ul>
          <li className="body-text"><strong>Regular Software Updates:</strong> Keep software and systems updated to protect against vulnerabilities.</li>
          <li className="body-text"><strong>Strong Password Policies:</strong> Enforce the use of complex passwords and regular password changes.</li>
          <li className="body-text"><strong>Multi-Factor Authentication (MFA):</strong> Add an extra layer of security beyond just a username and password.</li>
          <li className="body-text"><strong>Security Awareness Training:</strong> Educate employees and users about recognizing and responding to cyber threats.</li>
        </ul>

        {/* Progress bar */}
        <div className="progress-bar">
          <div
            style={{
              height: '8px',
              backgroundColor: '#4CAF50',
              width: `${progress}%`,
              transition: 'width 0.2s ease-in-out',
            }}
          ></div>
        </div>

        <div className="button-container">
          <button className="button button-primary" onClick={generateContentPDF}>
            Download Content as PDF
          </button>
          <button className="button button-secondary" onClick={handleCompleteCourse}>
            Complete Course
          </button>
        </div>
      </div>

      {/* Certificate Dialog */}
      {openCertificate && (
        <div className="dialog">
          <div className="dialog-title">Certificate of Completion</div>
          <div className="dialog-body">
            <p>Congratulations! You have completed the Cyber Threats and Mitigation course.</p>
          </div>
          <div className="dialog-actions">
            <button className="dialog-button dialog-button-primary" onClick={generateCertificatePDF}>
              Download Certificate
            </button>
            <button className="dialog-button dialog-button-secondary" onClick={handleCloseCertificate}>
              Close
            </button>
          </div>
        </div>
      )}
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

export default CyberThreatsAndMitigation;
