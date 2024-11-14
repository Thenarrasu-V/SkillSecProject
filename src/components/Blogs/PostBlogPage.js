import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './PostBlogPage.css';
import Navbar from '../common/Navbar';

const PostBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showToolbar, setShowToolbar] = useState(false);
  const navigate = useNavigate();

  // Retrieve the user details from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const userName = user ? user.userName : 'Anonymous'; // Default to 'Anonymous' if no user is found
  const userId = user ? user.userId : 'Anonymous'; // Default to 'Anonymous' if no user is found

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the blog data to be sent to the backend
    const blogData = {
      userId: userId, // Include userId from localStorage
      userName: userName, // Include userName from localStorage
      title: title,
      content: content,
    };

    try {
      // Send POST request to your backend
      const response = await axios.post('http://localhost:8080/api/blog/add', blogData);
      
      // Assuming the backend returns a success status or message
      if (response.status === 201) {
        alert('Blog Posted Successfully!');
        setTitle(''); // Clear the input fields after submission
        setContent('');
        navigate('/bloglan'); // Redirect to the home page or blog list
      }
    } catch (err) {
      console.error('Error posting blog:', err);
      alert('Failed to post blog. Please try again.');
    }
  };

  const handleAddMedia = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*,.pdf,.doc,.docx';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      console.log('Selected file:', file);
      // Handle the uploaded file here (e.g., upload to server)
    };
    fileInput.click();
  };

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="post-blog">
      <Navbar />
      <header className="post-blog-header">
        <h1>SKILLSEC</h1>
        <button className="publish-button" onClick={handleSubmit}>Publish</button>
      </header>
      <div className="post-blog-body">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="title-input"
          required
        />
        <button className="add-media-button" onClick={handleAddMedia}>+</button>
        <button className="more-options-button" onClick={() => setShowToolbar(!showToolbar)}>⋯</button>
        {showToolbar && (
          <div className="toolbar">
            <button onClick={() => formatText('bold')}><b>B</b></button>
            <button onClick={() => formatText('italic')}><i>I</i></button>
            <button onClick={() => formatText('underline')}><u>U</u></button>
          </div>
        )}
        <div
          className="content-input"
          contentEditable
          onInput={(e) => setContent(e.target.innerHTML)}
          placeholder="Tell your story..."
        />
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

export default PostBlogPage;
