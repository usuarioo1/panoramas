import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/panoramas.css'


const Panoramas = () => {
    return (
        <Grid container justifyContent="center" mt={5}>
            <Grid item xs={12} sm={6} md={8}>
                <NavLink to={'/panoramas'} className='navlink'>
                    <Card sx={{
                        height:400,
                        transition: "0.2s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}>
                        <CardActionArea>
                            {/* Aumenta la altura de la imagen */}
                            <CardMedia component="img" width={'100%'} height={300}  image={'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3f23e1a0-6da5-4a06-b6e2-652d67bf731b_1600x903.png'} alt='imagen' />
                            <CardContent>
                                <Typography variant='h3'>Panoramas</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </NavLink>
            </Grid>
        </Grid>
    );
};

export default Panoramas;

