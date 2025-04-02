import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return; // Evitar agregar tareas sin título

    const newTask = {
      id: Date.now(), // Usamos la fecha actual como ID temporal
      title,
      description,
      status: 'Por hacer'
    };

    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Agregar Nueva Tarea
      </Typography>
      <TextField
        label="Título"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Descripción"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar Tarea
      </Button>
    </Box>
  );
};

export default NewTaskForm;
