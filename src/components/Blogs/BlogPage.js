// blogs/BlogPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from './BlogContext';
import BlogPost from './BlogPost';

const BlogPage = () => {
  const { id } = useParams();
  const { blogs } = useBlog();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="blog-page">
      {blog ? <BlogPost blog={blog} /> : <p>Blog not found</p>}
    </div>
  );
};

export default BlogPage;
