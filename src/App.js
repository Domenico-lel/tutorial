import './App.css';
import { useState } from 'react';
import CountersApp from './components/widgets/CountersApp';
import TodoApp from './TodoApp';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
