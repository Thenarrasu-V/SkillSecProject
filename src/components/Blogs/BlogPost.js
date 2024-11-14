// blogs/BlogPost.js
import React, { useState } from 'react';
import { useBlog } from './BlogContext';
import CommentSection from './CommentSection';

const BlogPost = ({ blog }) => {
  const { likeBlog } = useBlog();
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={() => likeBlog(blog.id)}>Like ({blog.likes})</button>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && <CommentSection blogId={blog.id} />}
    </div>
  );
};

export default BlogPost;
