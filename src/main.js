import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Box,
    Avatar,
    Divider,
    InputBase,
    Paper,
    BottomNavigation,
    BottomNavigationAction,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';
import PostFeed from './postfeed';
import PostAddIcon from '@mui/icons-material/PostAdd';
import './Main.css';  
import CalendarDashboard from "./CalendarDashboard";
import Post from './post';// ✅ Import CSS

function Main() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [value, setValue] = useState(0);
    const nav = useNavigate();
    const [home,sethome]=useState(true);
    const [postbool,setpostbool] = useState(false);
    const [calenderbool,setcalenderbool]=useState(false);

    const toggleDrawer = (open) => () => {
        setIsSidebarOpen(open);
    };
    const postadd = (open) => () => {
        sethome(false);
        setpostbool(true);
    };
    const handlehome = (open) => () => {
        
    };

    const handleMessage = () => {
        nav("/ChatList");
    };

    const handleAvatar = () => {
        nav("/Dash");
    };

    return (
        <Box className="main-container">
            {/* Fixed App Bar */}
            <AppBar position="fixed">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ mr: 2 }}>
                        SKILL HIRE
                    </Typography>

                    <Paper
                        component="form"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 300,
                            px: 2,
                            py: 0.5,
                            borderRadius: 4,
                            backgroundColor: 'white',
                        }}
                        elevation={0}
                    >
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ flex: 1 }}
                        />
                    </Paper>

                    <Box>
                        <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ ml: 2 }}>
                            <AccountCircleIcon />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            onClick={handleMessage}
                            sx={{ ml: 1 }}
                        >
                            <MessageIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer anchor="right" open={isSidebarOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250, padding: 2 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Avatar sx={{ width: 80, height: 80, mb: 2 }} />
                        <Typography variant="h6" onClick={handleAvatar}>
                            Admin
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            admin@example.com
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body1">Settings</Typography>
                    <Typography variant="body1">Logout</Typography>
                </Box>
            </Drawer>

            {/* Scrollable PostFeed */}
         {home &&    <Box className="postfeed-container">
                <PostFeed />
            </Box>}
            {postbool &&    <Box className="postfeed-container">
                <Post />
            </Box>}
           {calenderbool&& <Box className="postfeed-container">
                <CalendarDashboard />
            </Box>}


            {/* Fixed Footer Navigation */}
            <Box className="footer">
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        if (newValue === 0){
                            sethome(true);
                            setpostbool(false);
                             setcalenderbool(false)

                        } ;
                        if (newValue === 1) {
                            sethome(false);
                            setpostbool(true);
                            setcalenderbool(false)
                        };
                        if (newValue === 2) {
                            setcalenderbool(true);
                            sethome(false);
                            setpostbool(false);
                        };
                        if (newValue === 3) nav("/Dash");
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                     <BottomNavigationAction label="Post" icon={<PostAddIcon />} />
                    <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon />} />
                    <BottomNavigationAction label="Leaderboard" icon={<EmojiEventsIcon />} />
                </BottomNavigation>
            </Box>
        </Box>
    );
}

export default Main;
