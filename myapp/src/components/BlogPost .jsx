import React, { useState } from "react";

const BlogPost = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      setComments([...comments, formData]);
      setFormData({ name: "", email: "", comment: "" });
    }
  };

  return (
    <div className="container mt-4">
      {/* Sample Blog Content */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">Understanding React Basics</h3>
          <p className="card-text">
            React is a JavaScript library for building user interfaces. It helps
            create fast and interactive UIs with reusable components.
          </p>
        </div>
      </div>

      {/* Comment Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5>Leave a Comment</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email ID:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Comment:</label>
              <textarea
                name="comment"
                className="form-control"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      {/* Display Comments */}
      <div>
        <h5>Comments</h5>
        {comments.length === 0 && <p>No comments yet.</p>}
        {comments.map((c, index) => (
          <div key={index} className="border rounded p-3 mb-2 bg-light">
            <p>
              <strong>{c.name}</strong> ({c.email})
            </p>
            <p>{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
