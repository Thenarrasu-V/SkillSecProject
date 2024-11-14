import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../../Styles/SignUp.css'; // CSS for SignUp page

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Prepare user data to be sent to the backend
    const userData = {
      userName: username,
      name: name,
      pass: password,
      email: email,
    };
    
    try {
      // Send POST request to backend API
      const response = await axios.post('http://localhost:8080/api/user/sign-up', userData);
      console.log(response.data);
      console.log(response.status);
      
      // Handle success
      if (response.data === "success") {
        alert('Sign up successful');
        navigate('/dashboard'); // Redirect to the dashboard on success
      }
      else{

      }
    } catch (err) {
      // Handle error
      console.error('Error during sign-up:', err);
      setError('An error occurred during sign-up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Your SkillSec Account</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Create a username"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="signup-button">Sign Up</button>

          <p className="signin-link">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
