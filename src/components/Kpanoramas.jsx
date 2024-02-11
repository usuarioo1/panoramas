import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Kpanoramas = () => {
    return (
        <Grid container justifyContent="center" mt={5}>
            <Grid item xs={12} sm={6} md={8}>
                <Card sx={{
                    transition: "0.2s",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}>
                    <CardActionArea>
                        <CardContent>
                            <CardMedia component="img" width={'100%'} height={200} image={'/src/assets/img/c24b53b8-cc9b-4cbe-babc-2b1504a7f1eb.png'} alt='imagen' />
                            <Typography variant='h3'>
                                K-Panoramas
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Kpanoramas