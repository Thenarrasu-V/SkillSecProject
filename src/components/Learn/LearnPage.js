import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar'; // Import Navbar component
import './LearnPage.css';

const LearnPage = () => {
  const navigate = useNavigate();

  const cardContent = [
    {
      title: "Introduction to Cybersecurity",
      description: "Learn the basics of cybersecurity and why it is essential in today's digital world.",
      path: '/intro',
    },
    {
      title: "Encryption and Decryption",
      description: "Understand the principles of encryption and decryption to protect sensitive information.",
      path: '/enc-dec',
    },
    {
      title: "Network Security",
      description: "Explore network security measures to prevent unauthorized access and attacks.",
      path: '/netsec',
    },
    {
      title: "Cyber Threats and Mitigation",
      description: "Identify common cyber threats and learn strategies to mitigate them.",
      path: '/cyber-threats',
    },
  ];

  const handleLearnMore = (path) => {
    navigate(path);
  };

  const handleRoadmap = () => {
    navigate('/cybersecurity-roadmap');
  };

  const handleQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <Navbar /> {/* Navbar added here */}
    <div className="learn-page">
      <div className="navbar-container">
      </div>

      <header className="learn-page-header">
        <h1>Cybersecurity Learning Modules</h1>
        <p>Enhance your knowledge with our comprehensive cybersecurity courses.</p>
      </header>

      <div className="course-grid">
        {cardContent.map((content, index) => (
          <div key={index} className="course-card">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <button onClick={() => handleLearnMore(content.path)}>Learn More</button>
          </div>
        ))}
      </div>

      <div className="quiz-section">
        <button onClick={handleQuiz}>Take the Quiz</button>
      </div>

      <div className="subscribe-section">
        <h2>Subscribe for Updates</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <button onClick={handleRoadmap}>Roadmap</button>
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

export default LearnPage;
