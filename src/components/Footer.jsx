import React from 'react';
import '../css/footer.css'; // Archivo de estilos CSS para el footer
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container sx={{marginTop:5}}>
        <div  className='footer'>  <Typography sx={{marginLeft:3}} variant='h6' className='mainTitle'>© Todos los derechos reservados a Panoramas</Typography></div>
        </Container>
    );
};

export default Footer;
