import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Chip,
} from '@mui/material';


import AddCircleIcon from '@mui/icons-material/AddCircle';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup,setsignup]=useState(false)
  const nav =useNavigate()
  const handleLogin = () => {
    // Add real login logic here
    nav("/Main")
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSignUp = () => {
    // Add real sign-up logic here (API call)
    const userData = { name, username, phone, age, occupation, skills };
    console.log('Sign-Up Data:', userData);
    navigate('/Main'); // Navigate after sign up
  };

  

  return (
    <div>
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
    

    { signup &&(
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
          maxWidth: 500,
          borderRadius: 4,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Create Account
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          label="Occupation"
          variant="outlined"
          fullWidth
          margin="normal"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />

        {/* Dynamic Skill Box */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <TextField
            label="Add Skill"
            variant="outlined"
            fullWidth
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddSkill();
              }
            }}
          />
          <IconButton color="primary" onClick={handleAddSkill}>
            <AddCircleIcon />
          </IconButton>
        </Box>

        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleRemoveSkill(skill)}
              color="primary"
            />
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, borderRadius: 2 }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          Already have an account? <strong>Log in</strong>
        </Typography>
      </Paper>
    </Box>)}
    </div>
  );
}

export default LoginPage;



