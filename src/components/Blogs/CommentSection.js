// blogs/CommentSection.js
import React, { useState } from 'react';
import { useBlog } from './BlogContext';

const CommentSection = ({ blogId }) => {
  const { addComment, blogs } = useBlog();
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    addComment(blogId, comment);
    setComment('');
  };

  return (
    <div className="comment-section">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Post Comment</button>
      <div>
        {blogs.find((b) => b.id === blogId).comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
