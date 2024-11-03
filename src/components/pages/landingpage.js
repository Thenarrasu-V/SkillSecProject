import React from 'react';
import '../../Styles/landingpage.css'; 
import { useNavigate } from 'react-router-dom';
import Cyber from '../Assets/Cybersecurity.png';
import encr from '../Assets/en.png';
import Blogs from '../Assets/Blog.jpg';
import Gamified from '../Assets/Gamified.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master Cybersecurity Skills with SkillSec</h1>
          <p>
            Interactive learning, hands-on encryption techniques, and gamified progress tracking for cybersecurity enthusiasts.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/signin')}>Sign In</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Learn Cybersecurity</h3>
            <img src={Cyber}/>
            <p>Explore expert-created resources on cybersecurity techniques and tools.</p>
          </div>
          <div className="feature">
            <h3>Encryption Playground</h3>
            <img src={encr}/>
            <p>Encrypt text using various encryption algorithms and learn their practical applications.</p>
          </div>
          <div className="feature">
            <h3>Interactive Blogs</h3>
            <img src={Blogs}/>
            <p>Join the conversation by writing and commenting on blogs focused on cybersecurity trends.</p>
          </div>
          <div className="feature">
            <h3>Gamified Learning</h3>
            <img src={Gamified}/>
            <p>Track your progress, earn rewards, and climb the ranks as you develop your skills.</p>
          </div>
        </div>
      </section>

      {/* Why Choose SkillSec Section */}
      <section className="why-choose">
        <h2>Why Choose SkillSec?</h2>
        <div className="why-choose-items">
          <p><strong>Hands-on Learning:</strong> Not just theory! Practice encryption techniques and learn by doing.</p>
          <p><strong>Expert Guidance:</strong> Learn from the best with materials created by industry professionals.</p>
          <p><strong>Community Driven:</strong> Connect with like-minded learners and engage with the cybersecurity community.</p>
          <p><strong>Track Your Progress:</strong> Gamified learning keeps you motivated as you watch your skills grow.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className='test'>Testimonials</h2>
        <p>“SkillSec made cybersecurity learning fun and engaging! The encryption exercises were especially helpful.” — John Doe</p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up for Free</h3>
            <p>Create an account in minutes.</p>
          </div>
          <div className="step">
            <h3>2. Learn at Your Own Pace</h3>
            <p>Access resources, blogs, and hands-on encryption exercises.</p>
          </div>
          <div className="step">
            <h3>3. Level Up</h3>
            <p>Earn points, unlock badges, and track your progress.</p>
          </div>
          <div className="step">
            <h3>4. Join the Community</h3>
            <p>Write blogs, comment on posts, and interact with other learners.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Your Cybersecurity Journey?</h2>
        <button onClick={() => navigate('/signup')}>Sign Up for Free</button>
      </section>

      {/* Footer Section */}
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

export default LandingPage;