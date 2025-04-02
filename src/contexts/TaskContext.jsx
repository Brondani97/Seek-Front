import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL; // Asegúrate de definir esta variable en tu .env

  // Cargar las tareas desde el back-end al montar el componente
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Error al cargar las tareas:", error));
  }, [API_URL]);

  const addTask = async (newTask) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer TokenSecreto'
        },
        body: JSON.stringify(newTask)
      });
      if (response.ok) {
        const createdTask = await response.json();
        setTasks(prev => [...prev, createdTask]);
      }
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer TokenSecreto'
        },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (response.ok) {
        // Actualizar el estado local, o recargar las tareas
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === id ? { ...task, status: newStatus } : task
          )
        );
      }
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer TokenSecreto'
        }
      });
      if (response.ok) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
