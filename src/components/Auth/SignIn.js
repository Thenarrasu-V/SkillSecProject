import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === 'user@skillsec.com' && password === 'password123') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-form">
          <h2>Sign In to SkillSec</h2>
          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <label>Email or Username</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or username"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="signin-button">Sign In</button>

            <p className="signup-link">
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
