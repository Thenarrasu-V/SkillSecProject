import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../common/Navbar';
import './styles.css';
import img from '../Assets/Blog-intro.jpg'

const BlogDetailPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL params
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/blog/get-by-id/${id}`);
        if (response.data!==null) {
          setBlog(response.data);
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setError('Failed to fetch blog details. Please try again later.');
      }
    };

    fetchBlogDetails();
  }, [id]); // Re-run when the ID changes

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-detail-page">
      <Navbar />
      <header className="blog-detail-header">
        <h1>{blog.title}</h1>
        <p><strong>Author:</strong> {blog.userName}</p>
      </header>
      <div className="blog-detail-content">
        <img
          src={blog.thumbnail || img }
          alt={blog.title}
          className="blog-thumbnail"
        />
        <div className="blog-detail-body">
          <p>{blog.content}</p>
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

export default BlogDetailPage;
