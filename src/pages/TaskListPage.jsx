import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardActions, Select, MenuItem } from '@mui/material';
import NewTaskForm from '../components/NewTaskForm';
import { TaskContext } from '../contexts/TaskContext';

const TaskListPage = () => {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useContext(TaskContext);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Lista de Tareas
      </Typography>
      <Grid container columns={12} spacing={3}>
        {tasks.map((task) => (
          <Grid key={task.id} gridColumn={{ xs: 'span 12', sm: 'span 6', md: 'span 4' }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" data-testid={`task-title-${task.id}`}>
                  {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  {task.description}
                </Typography>
                <Typography variant="subtitle1" color="primary" data-testid={`task-status-${task.id}`}>
                  Estado: {task.status}
                </Typography>
              </CardContent>
              <CardActions>
                <Select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                  size="small"
                >
                  <MenuItem value="Por hacer">Por hacer</MenuItem>
                  <MenuItem value="En progreso">En progreso</MenuItem>
                  <MenuItem value="Completada">Completada</MenuItem>
                </Select>
                <Button size="small" color="error" onClick={() => deleteTask(task.id)}>
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <NewTaskForm onAddTask={addTask} />
    </div>
  );
};

export default TaskListPage;
