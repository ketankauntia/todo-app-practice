import { useState } from 'react';
import Header from './components/Header';
import TodoInputField from './components/TodoInputField';
import TodoDisplayList from './components/TodoDisplayList';
import './App.css';

function App() {
  const [tasks, setTask] = useState([]);

  //adding new task
  // from input field, value is sent to app.jsx
  //then destructured and then added to main list
  const addTask = (newTask) => {
    const taskObject = { text: newTask, completed: false };
    setTask([...tasks, taskObject]);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTask(updatedTasks);
  };

  const toggleCompletedTasks = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed }; // Toggle the 'completed' field
      }
      return task;
    });
    setTask(updatedTasks);
  };

  return (
    <div className='container'>
      <Header />
      <TodoInputField onAddTask={addTask} />
      <TodoDisplayList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleCompletedTasks}
      />{' '}
      {/* sending task list to display */}
    </div>
  );
}

export default App;
