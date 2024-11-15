import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CybersecurityRoadmap.css'; // Import the CSS file

const CybersecurityRoadmap = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const roadmapItems = [
    {
      title: 'Introduction to Cybersecurity',
      description: 'Understand the basics of cybersecurity, including its importance and fundamental principles.',
      icon: '🔒', // Replace Material-UI icons with emoji or custom images
    },
    {
      title: 'Encryption & Cryptography',
      description: 'Learn how encryption protects data and the foundations of cryptographic algorithms.',
      icon: '🔐',
    },
    {
      title: 'Network Security',
      description: 'Gain insights into securing networks, preventing unauthorized access, and protecting data in transit.',
      icon: '📶',
    },
    {
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Explore vulnerability assessment techniques and learn how to conduct penetration tests.',
      icon: '🐞',
    },
    {
      title: 'Threat Intelligence & Incident Response',
      description: 'Understand cyber threats, incident response frameworks, and how to mitigate attacks effectively.',
      icon: '🛡️',
    },
    {
      title: 'Ethical Hacking & Offensive Security',
      description: 'Dive into ethical hacking methodologies and offensive security practices to think like an attacker.',
      icon: '💻',
    },
  ];

  return (
    <div className="container">
      <div className="title">Cybersecurity Learning Roadmap</div>
      <div className="subtitle">
        Follow this structured roadmap to develop core cybersecurity skills and advance in your cybersecurity career.
      </div>

      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Navigate to the previous page
      >
        Back
      </button>

      {/* Timeline */}
      <div className="timeline">
        {roadmapItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-separator">
              <div className="timeline-dot">{item.icon}</div>
              {index < roadmapItems.length - 1 && <div className="timeline-connector"></div>}
            </div>
            <div className="timeline-content">
              <div className="timeline-box">
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-description">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CybersecurityRoadmap;
