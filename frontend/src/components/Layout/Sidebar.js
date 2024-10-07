// src/components/Layout/Sidebar.js
import React from 'react';
import PropTypes from 'prop-types';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Divider,
    Box,
    Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SalesIcon from '@mui/icons-material/Sell';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const drawerWidth = 240;

// Styled ListItemButton for custom link colors and styles
const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
    color: '#000000', // Default black text
    fontSize: '0.875rem', // Reduced font size
    '& .MuiListItemIcon-root': {
        minWidth: '40px', // Adjust icon spacing
        color: '#000000', // Default black icon color
    },
    '&:hover': {
        backgroundColor: '#d3d3d3', // Grey background on hover
        color: '#ffffff', // White text on hover
        '& .MuiListItemIcon-root': {
            color: '#ffffff', // White icons on hover
        },
    },
    '&.Mui-selected': {
        backgroundColor: alpha('#40E0D0', 0.15), // Light turquoise background when selected
        color: '#40E0D0', // Turquoise text when selected
        '& .MuiListItemIcon-root': {
            color: '#40E0D0', // Turquoise icons when selected
        },
        '&:hover': {
            backgroundColor: alpha('#40E0D0', 0.25), // Darker turquoise on hover when selected
            color: '#ffffff', // White text on hover when selected
            '& .MuiListItemIcon-root': {
                color: '#ffffff', // White icons on hover when selected
            },
        },
    },
}));

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
    const location = useLocation();

    const navigationItems = [
        { text: 'Employee Network', icon: <PeopleIcon fontSize="small" />, path: '/employee-network' },
        { text: 'Demo Workspace', icon: <FolderIcon fontSize="small" />, path: '/demo-workspace' },
        { text: 'Intranet', icon: <DashboardIcon fontSize="small" />, path: '/intranet' },
        { text: 'Project Management', icon: <AssignmentIcon fontSize="small" />, path: '/project-management' },
        { text: 'Sales Management', icon: <SalesIcon fontSize="small" />, path: '/sales-management' },
        { text: 'Chat', icon: <ChatIcon fontSize="small" />, path: '/chat' },
    ];

    const drawer = (
        <Box sx={{ bgcolor: '#f5f5f5', height: '100%', position: 'relative' }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Henhouse Studio
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {navigationItems.map((item) => (
                    <StyledListItemButton
                        key={item.text}
                        component={Link}
                        to={item.path}
                        active={location.pathname === item.path}
                        selected={location.pathname === item.path}
                        onClick={handleDrawerToggle}
                    >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ fontSize: '0.875rem' }} />
                    </StyledListItemButton>
                ))}
            </List>
            <Divider />
            <Box sx={{ position: 'absolute', bottom: 0, width: '100%', mb: 2 }}>
                <List>
                    <StyledListItemButton
                        component={Link}
                        to="/create-workspace"
                        active={location.pathname === '/create-workspace'}
                        selected={location.pathname === '/create-workspace'}
                        onClick={handleDrawerToggle}
                    >
                        <ListItemIcon>
                            <AddCircleOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Create Workspace" sx={{ fontSize: '0.875rem' }} />
                    </StyledListItemButton>
                    <StyledListItemButton
                        component={Link}
                        to="/manage-workspaces"
                        active={location.pathname === '/manage-workspaces'}
                        selected={location.pathname === '/manage-workspaces'}
                        onClick={handleDrawerToggle}
                    >
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Manage Workspaces" sx={{ fontSize: '0.875rem' }} />
                    </StyledListItemButton>
                </List>
            </Box>
        </Box>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block' }, // Always use temporary drawer
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

Sidebar.propTypes = {
    mobileOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default Sidebar;
