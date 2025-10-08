import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav =useNavigate()
  const handleLogin = () => {
    // Add real login logic here
    nav("/Main")
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 4,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Welcome Back
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            backgroundColor: '#ffffffdd',
            borderRadius: 2,
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: '#ffffffdd',
            borderRadius: 2,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={handleLogin}
        >
          Log In
        </Button>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          Don’t have an account? <strong>Sign up</strong>
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoginPage;