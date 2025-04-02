import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TaskContext } from '../contexts/TaskContext';

const ChartsPage = () => {
  const { tasks } = useContext(TaskContext);

  // Función para agrupar tareas por estado
  const getData = (tasks) => {
    const counts = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map(status => ({
      name: status,
      value: counts[status]
    }));
  };

  const data = getData(tasks);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div style={{ padding: '20px', height: '400px' }}>
      <Typography variant="h4" gutterBottom>
        Gráfico de Tareas por Estado
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsPage;
