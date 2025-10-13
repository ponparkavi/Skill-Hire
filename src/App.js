import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarDashboard from "./CalendarDashboard";
import SkillHierProfile from "./SkillHierProfile";
import Dashboard from "./Dashboard";
import Main from "./main";
import ChatList from './ChatList';
import ChatPage from './ChatPage';
import LoginPage from './Login';
import Post from './post';
import AuthPage from './AuthPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AuthPage />} />
        <Route path="/Dash" element={<Dashboard />} />
        <Route path="/profile" element={<SkillHierProfile />} />
        <Route path="/calendar" element={<CalendarDashboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/ChatList" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

