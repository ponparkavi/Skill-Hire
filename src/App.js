import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillHierProfile from "./OwnProfile";
import Post from "./post";
import PostDetail from "./PostDetail";
import CalendarDashboard from "./CalendarDashboard";
import Dashboard from "./Dashboard";
import Main from "./main";
import ChatList from "./ChatList";
import ChatPage from "./ChatPage";
import AuthPage from "./AuthPage";
import Settings from "./settings";
import Meeting from "./meeting";

function App() {
  const [posts, setPosts] = useState([]); // shared posts state

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/profile"
          element={<SkillHierProfile posts={posts} setPosts={setPosts} />}
        />
        <Route path="/calendar" element={<CalendarDashboard />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/post"
          element={<Post posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/post/:id"
          element={<PostDetail posts={posts} setPosts={setPosts} />}
        />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatPage />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
