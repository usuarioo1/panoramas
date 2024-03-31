import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper } from '@mui/material';




const Temperatura = () => 
    {
        const [climaData, setClimaData] = useState(null);

        useEffect(() => {
            const fetchClimaData = async () => {
                try {
                    const response = await axios.get(`https://api.gael.cloud/general/public/clima/SCQN`);
                    setClimaData(response.data);
                } catch (error) {
                    console.error('Error al obtener los datos del clima:', error);
                }
            };

            fetchClimaData();
        }, []);

        return (
            <div>
                {/* Aquí puedes mostrar los datos del clima obtenidos */}
                {climaData && (
                    <Paper>
                        <Typography sx={{ fontSize: 30, textAlign: 'center', mt:5}}>Clima hoy</Typography>
                        <Typography variant='h6' align='center'>{climaData.Estacion}</Typography>
                        <Typography variant='h6' align='center'>Temperatura: {climaData.Temp}</Typography>
                        <Typography variant='h6' align='center'>Estado: {climaData.Estado}</Typography>
                        <img src={climaData.Icono} alt="" />
                        {/* Mostrar otros datos del clima según la estructura de la respuesta */}
                    </Paper>
                )}
            </div>
        );
    };

    export default Temperatura
