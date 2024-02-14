import React from 'react'
import styled from '@emotion/styled'
import { Container,Typography, Paper, Box } from '@mui/material'

const ListDeKpanoramas = () => {
    
    const Img = styled('img')({
        width:150,
        height:'100%',
        objectFit:'cover',
        objectPosition:'center'
    })
    return (
        <div>
            <Container sx={{mt:5, textAlign:'center'}}>
                <Typography variant='h3'>
                    K-Panoramas
                </Typography>
            </Container>

            <Paper sx={{display:'flex',
        alignItems: 'center',
        gap:2,
        overflow:'hidden',
        mt:5,
        height:200}}>
            <Img src='https://multianime.com.mx/wp-content/uploads/2024/01/LE-SSERAFIM-regresara-el-19-de-febrero-con-su-tercer-mini-album-EASY.jpg' />
                <Box>

                    <Typography variant='h5'>Nombre del panorama</Typography>
                    <Typography variant='h6'>Descripción del panorama</Typography>
                    <Typography variant='h6'>fecha</Typography>
                    <Typography variant='h6'>Lugar</Typography>
                    <Typography variant='h6'>Tipo:</Typography>


                </Box>
            </Paper>
            
        </div>
    )
}

export default ListDeKpanoramas
