import React from 'react';
import '../../Styles/AboutPage.css'; // Importing the CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-about">
        <div className="hero-content-about">
          <h1>About SkillSec</h1>
          <p>Your journey to mastering cybersecurity starts here. Explore why we created SkillSec and how it can empower you.</p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At SkillSec, our mission is to make cybersecurity skills accessible to everyone, providing hands-on learning experiences through an interactive platform. We believe in empowering learners to protect themselves in the digital world by mastering practical encryption techniques and security measures.
        </p>
      </section>

      {/* Vision and Values Section */}
      <section className="vision-values-section">
        <h2>Our Vision and Values</h2>
        <p>
          Our vision is to create a global community of cybersecurity enthusiasts who not only learn but apply their knowledge in meaningful ways. We value:
        </p>
        <ul>
          <li><strong>Hands-on Learning:</strong> Learning by doing is key to mastering cybersecurity.</li>
          <li><strong>Expertise:</strong> Gaining skills from industry experts who guide you along the way.</li>
          <li><strong>Community:</strong> Connecting with peers and experts to share knowledge and ideas.</li>
          <li><strong>Gamified Progress:</strong> Motivating users to keep pushing their limits through rewards and challenges.</li>
        </ul>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <h2>Our Story</h2>
        <p>
          The idea for SkillSec was born out of a need to create an interactive platform where anyone can learn cybersecurity in a fun and engaging way. Sai Kaushik H, Thenarrasu V, Ram Prasath R, Naveen P, and Saran M, passionate learners and tech enthusiasts, came together to build this platform. We wanted to bridge the gap between theory and practice by giving users the tools to not only learn about cybersecurity but also apply it in real-world scenarios.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>Sai Kaushik H</h3>
            <p>Co-Founder and Lead Developer</p>
          </div>
          <div className="team-member">
            <h3>Thenarrasu V</h3>
            <p>Co-Founder and Backend Developer</p>
          </div>
          <div className="team-member">
            <h3>Ram Prasath R</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-member">
            <h3>Naveen P</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <h3>Saran M</h3>
            <p>Data Analyst</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-about">
        <h2>Join Us on This Journey</h2>
        <p>Start learning cybersecurity today and become part of the growing SkillSec community!</p>
        <button>Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="about-footer">
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

export default AboutPage;