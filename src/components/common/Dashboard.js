import React, { useEffect } from 'react';
import Navbar from './Navbar';
import '../../Styles/Dashboard.css';

const Dashboard = () => {
  useEffect(() => {
    // Dynamically add Google Font link to the document head
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Cleanup function to remove the link when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="dash-dashboard">
      <Navbar />
      <section className="dash-hero1">
        <div className="dash-hero-content">
          <h2 className="dash-hero-title">Welcome to SkillSec</h2>
          <p className="dash-hero-text">
            Our mission is to empower beginners in the field of cybersecurity by providing a comprehensive learning platform that covers all essential aspects of cybersecurity.
          </p>
          <p className="dash-hero-text">
            At SkillSec, we believe that cybersecurity is not just for experts—it's for everyone. Our platform is designed to guide you through a complete roadmap of cybersecurity skills, from basic concepts to advanced techniques.
          </p>
          <p className="dash-hero-text">You will find a variety of learning resources, including:</p>
          <div className="dash-resources">
            <div className="dash-resource-card">
              <h3>Interactive Learning Modules</h3>
              <p>Engage with expertly crafted courses that offer hands-on experience in various cybersecurity techniques and tools.</p>
            </div>
            <div className="dash-resource-card">
              <h3>Cryptography Tools</h3>
              <p>Explore cryptographic algorithms and their applications with our online tools, designed to work seamlessly on both Linux and Windows.</p>
            </div>
            <div className="dash-resource-card">
              <h3>Community Blogs</h3>
              <p>Join a vibrant community where you can read and write blogs on the latest trends and topics in cybersecurity, sharing insights and experiences with others.</p>
            </div>
            <div className="dash-resource-card">
              <h3>Direct Messaging</h3>
              <p>Connect with fellow learners and mentors through our messaging feature, fostering collaboration and knowledge sharing.</p>
            </div>
          </div>
          <p className="dash-hero-text">
            Whether you're just starting your journey or looking to expand your existing knowledge, SkillSec provides a supportive environment for learning and growth. Our resources are tailored to meet the needs of beginners, making cybersecurity accessible and engaging for all.
          </p>
          <p className="dash-hero-text">
            We invite you to dive into our platform and start exploring the vast world of cybersecurity. Together, we can build a safer digital environment!
          </p>
        </div>
      </section>
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

export default Dashboard;
