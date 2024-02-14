import styled from '@emotion/styled'
import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'

const ListaDePanoramas = () => {

    const Img = styled('img')({
        width:150,
        height:'100%',
        objectFit:'contain',
        objectPosition:'center'
    })
    return (
        <div>
            <Container sx={{textAlign:'center'}}>
                <Typography variant='h3'>
                    Panoramas
                </Typography>
            </Container>

            <Paper sx={{display:'flex',
        alignItems: 'center',
        gap:2,
        overflow:'hidden',
        mt:5,
        height:200}}>
            <Img src='https://telltaletv.com/wp-content/uploads/2019/07/The-Office-Season-4-Dinner-Party.png' />
                <Box>

                    <Typography variant='h5'>Nombre del panorama</Typography>
                    <Typography variant='h6'>Descripción del panorama</Typography>
                    <Typography variant='h6'>fecha</Typography>
                    <Typography variant='h6'>Lugar</Typography>
                    <Typography variant='h6'>Tipo:</Typography>


                </Box>
            </Paper>

            <Container sx={{textAlign:'center',
        mt:5}}>
                <Typography variant='h4'>
                    Agregar Panorama
                </Typography>
            </Container>
        </div>
    )
}

export default ListaDePanoramas
