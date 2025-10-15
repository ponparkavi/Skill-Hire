import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const postIndex = posts.findIndex(p=>p.id===parseInt(id));
  if(postIndex===-1) return <p>Post not found</p>;
  const post = posts[postIndex];

  const handleNext = ()=>{ if(postIndex<posts.length-1) navigate(`/post/${posts[postIndex+1].id}`); }
  const handlePrev = ()=>{ if(postIndex>0) navigate(`/post/${posts[postIndex-1].id}`); }
  const handleLike = ()=> setPosts(prev=>prev.map(p=>p.id===post.id?{...p,likes:(p.likes||0)+1}:p));

  return (
    <div className="post-detail">
      <button onClick={()=>navigate("/profile")}>⬅ Back</button>
      <div className="post-content">
        {post.blocks.map((b,i)=>{
          if(b.type==="text") return <p key={i}>{b.content}</p>
          if(b.type==="image") return <img key={i} src={b.src} alt={`img-${i}`}/>
          if(b.type==="video") return <video key={i} src={b.src} controls/>
          return null
        })}
      </div>

      <div className="post-actions">
        <button onClick={handleLike}>👍 {post.likes||0}</button>
        <button onClick={()=>alert("Comment dummy")}>💬 {post.comments?.length||0}</button>
        <button onClick={()=>alert("Share dummy")}>🔗 Share</button>
      </div>

      <div className="navigation">
        <button onClick={handlePrev} disabled={postIndex===0}>Previous</button>
        <button onClick={handleNext} disabled={postIndex===posts.length-1}>Next</button>
      </div>
    </div>
  );
}

export default PostDetail;
