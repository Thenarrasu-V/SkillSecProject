// blogs/BlogContext.js
import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Sample Blog 1', content: 'Content of blog 1', likes: 0, comments: [] },
    { id: 2, title: 'Sample Blog 2', content: 'Content of blog 2', likes: 0, comments: [] }
  ]);

  const addBlog = (title, content) => {
    const newBlog = { id: Date.now(), title, content, likes: 0, comments: [] };
    setBlogs((prev) => [newBlog, ...prev]);
  };

  const likeBlog = (id) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog))
    );
  };

  const addComment = (id, comment) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === id ? { ...blog, comments: [...blog.comments, comment] } : blog))
    );
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, likeBlog, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
