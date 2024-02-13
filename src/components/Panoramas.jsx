import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Panoramas = () => {


    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={8}>
                <Link to={'/panoramas'}>
            <Card sx={{
                    transition: "0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}>
                    <CardActionArea>
                        <CardMedia component="img" width={'100%'} height={200}  image={'/src/assets/img/diner.jpg'} alt='imagen' />
                        <CardContent>
                            <Typography variant='h3'>Panoramas</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Panoramas;
