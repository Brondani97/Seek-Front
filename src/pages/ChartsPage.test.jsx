import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartsPage from './ChartsPage';
import { TaskProvider } from '../contexts/TaskContext';

describe('ChartsPage', () => {
  test('muestra el título del gráfico', () => {
    render(
      <TaskProvider>
        <ChartsPage />
      </TaskProvider>
    );
    
    expect(screen.getByText(/gráfico de tareas por estado/i)).toBeInTheDocument();
  });
});
