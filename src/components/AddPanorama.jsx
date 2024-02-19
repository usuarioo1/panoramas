import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Box, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import Swal from 'sweetalert2';
import SendIcon from '@mui/icons-material/Send';

const AddPanorama = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        fecha: '',
        lugar: '',
        imagen: '',
        tipo: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const showAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Panorama agregado!✨",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/crearpanorama', formData);
            showAlert(); // Llama a la función showAlert después de enviar el formulario
            console.log(response.data); // Maneja la respuesta del backend como desees
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div>
            <Container sx={{
                textAlign: 'center',
                mt: 5
            }}>
                <Typography variant='h4'>
                    Agregar Panorama
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField name="titulo" label="Panorama" variant="outlined" onChange={handleChange} />
                    <TextField name="descripcion" label="Descripción" variant="outlined" onChange={handleChange} />
                    <TextField name="fecha" label="Fecha" variant="outlined" onChange={handleChange} />
                    <TextField name="lugar" label="Lugar" variant="outlined" onChange={handleChange} />
                    <TextField name="imagen" label="imagen" variant="outlined" onChange={handleChange} />
                    <FormControl sx={{ width: '25ch' }}>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="tipo"
                            label="Tipo"
                            onChange={handleChange}
                        >
                            <MenuItem value={'P'}>P</MenuItem>
                            <MenuItem value={'K'}>K</MenuItem>
                        </Select>
                    </FormControl>

                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Enviar
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default AddPanorama;
