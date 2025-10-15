// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import "./post.css";

// function Post() {
//   // Single state variable to store all blocks
//   const [blocks, setBlocks] = useState([]);

//   // Add a new block
//   const addTextBlock = () => {
//     setBlocks([...blocks, { type: "text", content: "" }]);
//   };

//   const addImageBlock = (file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setBlocks([...blocks, { type: "image", src: e.target.result }]);
//     };
//     reader.readAsDataURL(file);
//   };

//   const addVideoBlock = (file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setBlocks([...blocks, { type: "video", src: e.target.result }]);
//     };
//     reader.readAsDataURL(file);
//   };

//   // Update text content inside the blocks array
//   const updateTextBlock = (index, value) => {
//     const newBlocks = [...blocks];
//     newBlocks[index].content = value;
//     setBlocks(newBlocks);
//   };

//   // On submit, everything is already in "blocks" variable
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // All post data in one variable
//     const postData = {
//       createdAt: new Date(),
//       blocks: blocks,
//     };

//     console.log("Full Post Data:", postData);

//     alert("Post created successfully!");

//     // Reset
//     setBlocks([]);
//   };

//   return (
//     <Box className="post-page">
//       <form className="post-content" onSubmit={handleSubmit}>
//         <Typography variant="h5" mb={2}>
//           Create a Post
//         </Typography>

//         {/* Render blocks */}
//         {blocks.map((block, index) => {
//           if (block.type === "text") {
//             return (
//               <TextField
//                 key={index}
//                 fullWidth
//                 multiline
//                 minRows={2}
//                 placeholder="Write something..."
//                 value={block.content}
//                 onChange={(e) => updateTextBlock(index, e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//             );
//           } else if (block.type === "image") {
//             return (
//               <img
//                 key={index}
//                 src={block.src}
//                 alt={`upload-${index}`}
//                 className="image-preview"
//               />
//             );
//           } else if (block.type === "video") {
//             return (
//               <video
//                 key={index}
//                 src={block.src}
//                 controls
//                 className="video-preview"
//               />
//             );
//           }
//           return null;
//         })}

//         {/* Buttons to add blocks */}
//         <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//           <Button variant="outlined" onClick={addTextBlock}>
//             Add Text
//           </Button>

//           <Button variant="outlined" component="label">
//             Add Image
//             <input
//               type="file"
//               hidden
//               accept="image/*"
//               onChange={(e) => addImageBlock(e.target.files[0])}
//             />
//           </Button>

//           <Button variant="outlined" component="label">
//             Add Video
//             <input
//               type="file"
//               hidden
//               accept="video/*"
//               onChange={(e) => addVideoBlock(e.target.files[0])}
//             />
//           </Button>
//         </Box>

//         <Button type="submit" variant="contained" color="primary">
//           Post
//         </Button>
//       </form>
//     </Box>
//   );
// }

// export default Post;

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/post.css";

function Post({ posts, setPosts }) {
  const [blocks, setBlocks] = useState([]);
  const navigate = useNavigate();

  const addTextBlock = () =>
    setBlocks([...blocks, { type: "text", content: "" }]);
  const addImageBlock = (file) => {
    const reader = new FileReader();
    reader.onload = (e) =>
      setBlocks([...blocks, { type: "image", src: e.target.result }]);
    reader.readAsDataURL(file);
  };
  const addVideoBlock = (file) => {
    const reader = new FileReader();
    reader.onload = (e) =>
      setBlocks([...blocks, { type: "video", src: e.target.result }]);
    reader.readAsDataURL(file);
  };
  const updateTextBlock = (i, val) => {
    const newBlocks = [...blocks];
    newBlocks[i].content = val;
    setBlocks(newBlocks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstMedia = blocks.find(
      (b) => b.type === "image" || b.type === "video"
    );
    const postData = {
      id: Date.now(),
      createdAt: new Date(),
      blocks,
      previewSrc: firstMedia ? firstMedia.src : null,
      likes: 0,
      comments: [],
    };
    setPosts((prev) => [...prev, postData]);
    alert("Post created!");
    setBlocks([]);
    navigate("/profile");
  };

  return (
    <Box className="post-page">
      <form onSubmit={handleSubmit} className="post-content">
        <Typography variant="h5" mb={2}>
          Create a Post
        </Typography>
        {blocks.map((b, i) => {
          if (b.type === "text")
            return (
              <TextField
                key={i}
                fullWidth
                multiline
                minRows={2}
                placeholder="Write something..."
                value={b.content}
                onChange={(e) => updateTextBlock(i, e.target.value)}
                sx={{ mb: 2 }}
              />
            );
          if (b.type === "image")
            return (
              <img
                key={i}
                src={b.src}
                className="image-preview"
                alt={`img-${i}`}
              />
            );
          if (b.type === "video")
            return (
              <video key={i} src={b.src} controls className="video-preview" />
            );
          return null;
        })}

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
