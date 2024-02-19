import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Container, Typography, Paper, Box } from '@mui/material';
import AddPanorama from './AddPanorama';
import { NavLink } from 'react-router-dom';
import '../css/backButton.css';

const ListDeKpanoramas = () => {
    const Img = styled('img')({
        width: 150,
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    });

    const [kpanoramas, setKpanoramas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/panoramas', {
            params: {
                tipo: 'K' // Filtrar por panoramas de tipo "k"
            }
        })
            .then(response => {
                setKpanoramas(response.data.info);
            })
            .catch(error => {
                console.error('Error al realizar la petición:', error);
            });
    }, []);


    return (
        <div>
            <Container sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant='h3'>
                    K-Panoramas
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

            {kpanoramas.map(kpanorama => (
                <Paper key={kpanorama._id} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    overflow: 'hidden',
                    mt: 5,
                    height: 250
                }}>
                    <Img src={kpanorama.imagen} />
                    <Box>
                        <Typography variant='h4'>{kpanorama.titulo}</Typography>
                        <Typography variant='h6'>Descripción: {kpanorama.descripcion}</Typography>
                        <Typography variant='h6'>Fecha: {kpanorama.fecha}</Typography>
                        <Typography variant='h6'>Lugar: {kpanorama.lugar}</Typography>
                        <Typography variant='h6'>Tipo: {kpanorama.tipo}</Typography>
                    </Box>
                </Paper>
            ))}
            <AddPanorama />
        </div>
    );
};

export default ListDeKpanoramas;
