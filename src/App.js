import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskListPage from './pages/TaskListPage';
import ChartsPage from './pages/ChartsPage';

function App() {
  return (
    <TaskProvider>
      <Router>
        <nav style={{ padding: '10px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Tareas</Link>
          <Link to="/charts">Gráficos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/charts" element={<ChartsPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
