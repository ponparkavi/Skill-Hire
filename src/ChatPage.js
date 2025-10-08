import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function ChatPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const chat = location.state?.chat;

  const [messages, setMessages] = useState([
    { from: 'them', text: 'Hello, are you there?' },
    { from: 'me', text: 'Yes, I’m here. What’s up?' },
    { from: 'them', text: 'Let’s finish the project today.' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!chat) {
    return (
      <Box p={2}>
        <Typography variant="h6">Chat not found</Typography>
        <Typography variant="body2">Please return to the chat list.</Typography>
      </Box>
    );
  }

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'me', text: input.trim() }]);
      setInput('');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(135deg, #f5f7fa, #c3cfe2)`,
        position: 'relative',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1.5,
          backgroundColor: '#2e3a59',
          color: 'white',
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}>
          <ArrowBackIcon />
        </IconButton>
        <Avatar src={chat.avatar} sx={{ mx: 1 }} />
        <Typography variant="h6" noWrap>
          {chat.name}
        </Typography>
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: 2,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: msg.from === 'me' ? 'flex-end' : 'flex-start',
              mb: 1.5,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                px: 2,
                py: 1,
                maxWidth: '70%',
                backgroundColor: msg.from === 'me' ? '#2e3a59' : '#ffffff',
                color: msg.from === 'me' ? '#ffffff' : '#333',
                borderRadius: msg.from === 'me'
                  ? '20px 20px 0 20px'
                  : '20px 20px 20px 0',
              }}
            >
              {msg.text}
            </Paper>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input */}
      <Box
        sx={{
          px: 2,
          py: 1,
          borderTop: '1px solid #ccc',
          backgroundColor: '#fff',
        }}
      >
        <TextField
          fullWidth
          placeholder="Type a message..."
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSend} color="primary">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              backgroundColor: '#f9f9f9',
              borderRadius: 3,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default ChatPage;