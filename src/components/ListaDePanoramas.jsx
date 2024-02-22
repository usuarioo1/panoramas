import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Container, Typography, Paper, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../css/backButton.css';
import Skeleton from 'react-loading-skeleton';

const ListadePanoramas = () => {
    const [loading, setLoading] = useState(true);
    const [panoramas, setPanoramas] = useState([]);

    useEffect(() => {
        axios.get('https://backpanoramas.onrender.com/panoramas', {
            params: {
                tipo: 'P'  // Filtrar por panoramas de tipo "p"
            }
        })
            .then(response => {
                setPanoramas(response.data.info);
                setLoading(false); // Indicar que la carga ha finalizado cuando se obtienen los datos
            })
            .catch(error => {
                console.error('Error al realizar la petición:', error);
            });
    }, []);

    const Img = styled('img')({
        width: 150,
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    });

    return (
        <div>
            <Container sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant='h3'>
                    Panoramas
                </Typography>

                <NavLink to="/" className="button">
                    <div className="button-box">
                        <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                ></path>
                            </svg>
                        </span>
                        <span className="button-elem">
                            <svg viewBox="0 0 46 40">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </NavLink>
            </Container>

            {loading && panoramas.length === 0 ? (
                // Renderizar el esqueleto mientras se cargan los datos
                <Paper sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    overflow: 'hidden',
                    mt: 5,
                    height: 300
                }}>
                    <Skeleton variant="rectangular" width={200} height={300} />
                    <Box>
                        <Typography variant='h4'><Skeleton /></Typography>
                        <Typography variant='h6'>Descripción: <Skeleton /></Typography>
                        <Typography variant='h6'>Fecha: <Skeleton /></Typography>
                        <Typography variant='h6'>Lugar: <Skeleton /></Typography>
                        <Typography variant='h6'>Tipo: <Skeleton /></Typography>
                    </Box>
                </Paper>
            ) : (
                // Renderizar los datos reales una vez que están disponibles
                panoramas.map(panorama => (
                    <Paper key={panorama._id} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        overflow: 'hidden',
                        mt: 5,
                        height: 300
                    }}>
                        <Img src={panorama.imagen} />
                        <Box>
                            <Typography variant='h4'>{panorama.titulo}</Typography>
                            <Typography variant='h6'>Descripción: {panorama.descripcion}</Typography>
                            <Typography variant='h6'>Fecha: {panorama.fecha}</Typography>
                            <Typography variant='h6'>Lugar: {panorama.lugar}</Typography>
                            <Typography variant='h6'>Tipo: {panorama.tipo}</Typography>
                        </Box>
                    </Paper>
                ))
            )}
        </div>
    );
};

export default ListadePanoramas;
