
import { Paper, Typography, Grid } from '@mui/material';
import React from 'react';
import Temperatura from './Temperatura';

const About = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
                <Paper sx={{ mt: 5, p: 2 }}>
                    <Typography sx={{ fontSize: 30, textAlign: 'center' }}>
                        App dedicada para organizar panoramas
                    </Typography>
                    
                </Paper>
                <Temperatura />
            </Grid>
        </Grid>
    );
};

export default About;
