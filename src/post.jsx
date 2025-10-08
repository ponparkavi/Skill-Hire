import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./post.css";

function Post() {
  // Single state variable to store all blocks
  const [blocks, setBlocks] = useState([]);

  // Add a new block
  const addTextBlock = () => {
    setBlocks([...blocks, { type: "text", content: "" }]);
  };

  const addImageBlock = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setBlocks([...blocks, { type: "image", src: e.target.result }]);
    };
    reader.readAsDataURL(file);
  };

  const addVideoBlock = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setBlocks([...blocks, { type: "video", src: e.target.result }]);
    };
    reader.readAsDataURL(file);
  };

  // Update text content inside the blocks array
  const updateTextBlock = (index, value) => {
    const newBlocks = [...blocks];
    newBlocks[index].content = value;
    setBlocks(newBlocks);
  };

  // On submit, everything is already in "blocks" variable
  const handleSubmit = (e) => {
    e.preventDefault();

    // All post data in one variable
    const postData = {
      createdAt: new Date(),
      blocks: blocks,
    };

    console.log("Full Post Data:", postData);

    alert("Post created successfully!");

    // Reset
    setBlocks([]);
  };

  return (
    <Box className="post-page">
      <form className="post-content" onSubmit={handleSubmit}>
        <Typography variant="h5" mb={2}>
          Create a Post
        </Typography>

        {/* Render blocks */}
        {blocks.map((block, index) => {
          if (block.type === "text") {
            return (
              <TextField
                key={index}
                fullWidth
                multiline
                minRows={2}
                placeholder="Write something..."
                value={block.content}
                onChange={(e) => updateTextBlock(index, e.target.value)}
                sx={{ mb: 2 }}
              />
            );
          } else if (block.type === "image") {
            return (
              <img
                key={index}
                src={block.src}
                alt={`upload-${index}`}
                className="image-preview"
              />
            );
          } else if (block.type === "video") {
            return (
              <video
                key={index}
                src={block.src}
                controls
                className="video-preview"
              />
            );
          }
          return null;
        })}

        {/* Buttons to add blocks */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button variant="outlined" onClick={addTextBlock}>
            Add Text
          </Button>

          <Button variant="outlined" component="label">
            Add Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => addImageBlock(e.target.files[0])}
            />
          </Button>

          <Button variant="outlined" component="label">
            Add Video
            <input
              type="file"
              hidden
              accept="video/*"
              onChange={(e) => addVideoBlock(e.target.files[0])}
            />
          </Button>
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Post
        </Button>
      </form>
    </Box>
  );
}

export default Post;
