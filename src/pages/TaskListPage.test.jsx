import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskListPage from './TaskListPage';
import { TaskProvider } from '../contexts/TaskContext';

describe('TaskListPage', () => {
  test('muestra las tareas y permite eliminar una tarea', () => {
    render(
      <TaskProvider>
        <TaskListPage />
      </TaskProvider>
    );
    
    // Obtener el título de la tarea "Tarea 1" usando test id
    const taskTitle = screen.getByTestId('task-title-1');
    expect(taskTitle).toHaveTextContent(/Tarea 1/i);
    
    // Obtener todos los botones "Eliminar" y simular clic en el primero
    const deleteButtons = screen.getAllByText(/eliminar/i);
    fireEvent.click(deleteButtons[0]);
    
    // Verificar que el título de la tarea "Tarea 1" ya no esté presente
    expect(screen.queryByTestId('task-title-1')).toBeNull();
  });
  
  test('permite actualizar el estado de una tarea', () => {
    render(
      <TaskProvider>
        <TaskListPage />
      </TaskProvider>
    );
    
    // Obtener el select y cambiar el estado de la tarea 1
    const statusSelect = screen.getByDisplayValue('Por hacer');
    fireEvent.change(statusSelect, { target: { value: 'En progreso' } });
    
    // Verificar que el estado de la tarea se actualice. Usamos el test id para la tarea 1.
    const taskStatus = screen.getByTestId('task-status-1');
    expect(taskStatus).toHaveTextContent(/En progreso/i);
  });
});
