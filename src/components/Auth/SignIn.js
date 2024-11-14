import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../../Styles/SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(''); // Changed from email to name
  const [pass, setPass] = useState(''); // Changed from password to pass
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Prepare login data
    const loginData = {
      name: name,
      pass: pass,
    };

    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:8080/api/user/sign-in', loginData);

      // Check if login is successful
      if (response.data !== null) {
        const userDetails = response.data; // Assuming the response contains user details
        
        // Store user details in localStorage
        localStorage.setItem('user', JSON.stringify(userDetails));

        // Optionally, set the user state in your app context or component (if needed)
        // setUser({ username: userDetails.userName, role, userDetails });

        // Set success message (if you have a snackbar or similar UI element)
        // setSnackbarMessage('Sign In Successful!');
        // setOpenSnackbar(true);

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        console.log("Login failed. User details are null.");
        setError('Invalid username or password');
      }
    } catch (err) {
      // Handle login error
      console.error('Login error:', err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-form">
          <h2>Sign In to SkillSec</h2>
          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
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
