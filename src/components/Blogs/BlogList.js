import React from 'react';

const BlogList = ({ searchQuery }) => {
  const blogs = [
    { id: 1, title: "Institutions vs. Evolution", author: "Anna Mercury" },
    { id: 2, title: "Reflections on Palantir", author: "Nabeel Qureshi" },
    { id: 3, title: "Notes from a Classroom", author: "Ian Williams" },
    // Add more blog data as needed
  ];

  // Filter blogs based on the search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="blog-list">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <div className="thumbnail"></div>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default BlogList;
