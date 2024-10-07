// src/pages/Dashboard.js
import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useTheme } from '@mui/material/styles';

const Dashboard = () => {
    const theme = useTheme();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Welcome to the Podio Clone Dashboard!
            </Typography>
            {/* Dashboard Widgets */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <WorkOutlineIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.primary.main }} />
                                <Box>
                                    <Typography variant="h6" color="textPrimary">
                                        Recent Projects
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        You have 5 ongoing projects.
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AssignmentTurnedInIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.success.main }} />
                                <Box>
                                    <Typography variant="h6" color="textPrimary">
                                        Upcoming Tasks
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        3 tasks due this week.
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <MailOutlineIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.info.main }} />
                                <Box>
                                    <Typography variant="h6" color="textPrimary">
                                        Messages
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        2 new messages.
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <NotificationsNoneIcon sx={{ fontSize: 40, mr: 2, color: theme.palette.warning.main }} />
                                <Box>
                                    <Typography variant="h6" color="textPrimary">
                                        Notifications
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        4 unread notifications.
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
