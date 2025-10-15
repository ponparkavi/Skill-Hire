import React, { useState } from "react";
import "./PostCreate.css";

const PostCreate = ({ onClose, onAddPost }) => {
  const [postData, setPostData] = useState({
    image: "",
    type: "photo",
    caption: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postData.image) return alert("Please enter an image URL");
    const newPost = {
      id: Date.now(),
      image: postData.image,
      likes: 0,
      comments: 0,
      type: postData.type,
    };
    onAddPost(newPost);
  };

  return (
    <div className="modal-overlay">
      <div className="post-modal">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <label>Image / Video URL:</label>
          <input type="text" name="image" value={postData.image} onChange={handleChange} placeholder="Enter media URL" />

          <label>Type:</label>
          <select name="type" value={postData.type} onChange={handleChange}>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          <label>Caption:</label>
          <textarea name="caption" value={postData.caption} onChange={handleChange} placeholder="Write something..." />

          <div className="modal-buttons">
            <button type="submit" className="facebook-btn facebook-btn-primary">Post</button>
            <button type="button" className="facebook-btn facebook-btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
