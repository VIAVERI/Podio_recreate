// src/components/Layout/Navbar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ handleDrawerToggle }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchOpen = () => {
        setSearchOpen(true);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setSearchOpen(false);
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'primary.main', // Uses theme's primary color (Turquoise)
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    {/* Hamburger Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo Area */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Podio Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6" noWrap component="div">
                            Podio Clone
                        </Typography>
                    </Box>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Navigation Icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton color="inherit" aria-label="help">
                            <HelpOutlineIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="notifications">
                            <NotificationsIcon />
                        </IconButton>
                        {/* Search Icon */}
                        <IconButton color="inherit" aria-label="search" onClick={handleSearchOpen}>
                            <SearchIcon />
                        </IconButton>
                        {/* Chat Icon */}
                        <IconButton color="inherit" aria-label="chat" onClick={() => navigate('/chat')}>
                            <ChatIcon />
                        </IconButton>
                        {/* User Profile Icon */}
                        <IconButton color="inherit" aria-label="account settings">
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Search Dialog */}
            <Dialog open={searchOpen} onClose={handleSearchClose}>
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Search..."
                        type="text"
                        fullWidth
                        variant="standard"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit();
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSearchClose}>Cancel</Button>
                    <Button onClick={handleSearchSubmit}>Search</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

// PropTypes for type checking
Navbar.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default Navbar;
