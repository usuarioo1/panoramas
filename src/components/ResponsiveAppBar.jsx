import React from 'react';
import '../css/navbar.css'
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Typography } from '@mui/material';

const ResponsiveAppBar = () => {
    return (
        <div className='navBar'>
            <SportsBarIcon sx={{
                fontSize: 60,
                alignItems: 'center'
            }} />
            <Typography sx={{marginLeft:8}} variant='h3' className='mainTitle'>Panoramas</Typography>
        </div>
    );
};

export default ResponsiveAppBar;
