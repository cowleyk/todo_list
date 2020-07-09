import React from 'react';
import logo from './logo.svg';
import './App.css';

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ToDoList />
      </header>
    </div>
  );
}

export default App;

