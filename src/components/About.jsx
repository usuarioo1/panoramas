import { Paper, Typography, Grid } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
                <Paper sx={{ mt: 5, p: 2 }}>
                    <Typography sx={{ fontSize: 30, textAlign: 'center' }}>
                        App dedicada para organizar panoramas
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default About;
