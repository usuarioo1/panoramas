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
                            <CardMedia component="img" width={'100%'} height={300}  image={'/src/assets/img/diner.jpg'} alt='imagen' />
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

