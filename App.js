import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <div className="App">
      <h1>My To-Do App</h1>
      <ErrorBoundary>
        <TaskInput />
        <TaskList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
