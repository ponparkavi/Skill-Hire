import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
function ChatList() {
  const navigate = useNavigate();

  const chats = [
    { id: 1, name: 'Alice', lastMessage: 'Hey there!', time: '10:45 AM', avatar: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?', time: 'Yesterday', avatar: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Charlie', lastMessage: 'Let’s catch up!', time: 'Monday', avatar: 'https://i.pravatar.cc/150?u=charlie' },
  ];

  const handleChatClick = (chat) => {
    navigate(`/chat/${chat.id}`, { state: { chat } });
  };
const onBack=()=>{
    navigate("/main")
}
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        p: 2,
        color: '#fff',
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={onBack} sx={{ color: 'white' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" ml={1} fontWeight="bold">
          Chats
        </Typography>
      </Box>

      {/* Chat List */}
      <List>
        {chats.map((chat, index) => (
          <React.Fragment key={chat.id}>
            <ListItem
              button
              onClick={() => handleChatClick(chat)}
              alignItems="flex-start"
              sx={{
                borderRadius: 2,
                backdropFilter: 'blur(5px)',
                backgroundColor: 'rgba(255, 255, 255, 0.27)',
                mb: 1,
                transition: 'background 0.3s',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.53)',
                },
              }}
            >
              <ListItemAvatar>
                <Avatar alt={chat.name} src={chat.avatar} />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" fontWeight="bold" color="white">
                      {chat.name}
                    </Typography>
                    <Typography variant="caption" color="white">
                      {chat.time}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography variant="body2" color="white" noWrap>
                    {chat.lastMessage}
                  </Typography>
                }
              />
            </ListItem>
            {index < chats.length - 1 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default ChatList;