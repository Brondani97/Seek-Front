import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTaskForm from './NewTaskForm';

describe('NewTaskForm', () => {
  test('llama a onAddTask al enviar el formulario', () => {
    const mockOnAddTask = jest.fn();
    render(<NewTaskForm onAddTask={mockOnAddTask} />);
    
    // Buscar campos y botón
    const titleInput = screen.getByLabelText(/título/i);
    const descriptionInput = screen.getByLabelText(/descripción/i);
    const submitButton = screen.getByRole('button', { name: /agregar tarea/i });
    
    // Simular ingreso de datos
    fireEvent.change(titleInput, { target: { value: 'Nueva Tarea' } });
    fireEvent.change(descriptionInput, { target: { value: 'Descripción de prueba' } });
    
    // Enviar formulario
    fireEvent.click(submitButton);
    
    // Verificar que se llamó la función callback
    expect(mockOnAddTask).toHaveBeenCalled();
    // Opcionalmente, verificar que se llamó con los datos esperados
    const llamada = mockOnAddTask.mock.calls[0][0];
    expect(llamada.title).toBe('Nueva Tarea');
    expect(llamada.description).toBe('Descripción de prueba');
    expect(llamada.status).toBe('Por hacer');
  });
});
