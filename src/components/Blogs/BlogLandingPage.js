import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogList from './BlogList';
import StaffPicks from './StaffPicks';
import './styles.css';
import Navbar from '../common/Navbar';

const BlogLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const defaultThumbnail = 'https://via.placeholder.com/150';

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePostClick = () => {
    navigate("/post-blog");
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blog/get-all');
        if (response.data !== null) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs. Please try again later.');
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <header className="header">
        <input
          type="text"
          className="search-input"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="post-button" onClick={handlePostClick}>Post</button>
      </header>

      <div className="content">
        <h2>All Blogs</h2>
        <div className="blog-list">
          {blogs
            .filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((blog) => (
              <div key={blog.id} className="blog-item">
                <img
                  src={blog.thumbnail || defaultThumbnail}
                  alt={blog.title}
                  className="blog-thumbnail"
                />
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}...</p>
                <button onClick={() => navigate(`/blog/${blog.id}`)}>Read more</button>
              </div>
            ))}
        </div>
        <StaffPicks />
      </div>

      {error && <p className="error">{error}</p>}

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

export default BlogLandingPage;
