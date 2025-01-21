import { useState } from 'react';
import Header from './components/Header';
import TodoInputField from './components/TodoInputField';
import TodoDisplayList from './components/TodoDisplayList';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <TodoInputField />
      <TodoDisplayList />
    </div>
  );
}

export default App;
