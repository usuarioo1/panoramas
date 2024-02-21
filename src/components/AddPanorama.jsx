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

    const showAlertError = () => {

        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo agregar el panorama, intenta denuevo 👌",
        });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validación de campos vacíos
        for (let field in formData) {
            if (!formData[field]) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `El campo "${field}" no puede estar vacío`,
                });
                return; // Detiene la ejecución de la función si algún campo está vacío
            }
        }
    
        try {
            const response = await axios.post('http://localhost:3000/crearpanorama', formData);
            showAlert(); // Llama a la función showAlert después de enviar el formulario
            console.log(response.data); // Maneja la respuesta del backend como desees
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showAlertError();
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
                        mt:3
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField name="titulo" label="Título" variant="outlined" required onChange={handleChange} />
                    <TextField name="descripcion" label="Descripción" variant="outlined" required onChange={handleChange} />
                    <TextField name="fecha" label="Fecha" variant="outlined" required onChange={handleChange} />
                    <TextField name="lugar" label="Lugar" variant="outlined" required onChange={handleChange} />
                    <TextField name="imagen" label="imagen" variant="outlined" required onChange={handleChange} />
                    <FormControl sx={{ width: '25ch' }}>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="tipo"
                            label="Tipo"
                            onChange={handleChange}
                            required
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
