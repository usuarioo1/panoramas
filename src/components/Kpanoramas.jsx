import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/panoramas.css'

const Kpanoramas = () => {
    return (
        <Grid container justifyContent="center" mt={5}>
            <Grid item xs={12} sm={6} md={8}>
                <NavLink className='navlink' to={'/kpanoramas'} >
                <Card sx={{
                    height:400,
                    transition: "0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                        
                    },
                }}>
                    <CardActionArea>
                        <CardContent>
                            <CardMedia component="img" width={'100%'} height={300} image={'https://kpopping.com/documents/84/4/800/LE-SSERAFIM-1st-Album-UNFORGIVEN-Concept-Photos-documents-3.jpeg?v=6c309'} alt='imagen' />
                            <Typography mt={2} variant='h3'>
                                K-Panoramas
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </NavLink>
            </Grid>
        </Grid>
    )
}

export default Kpanoramas
