import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = prompt('Colocar nueva tarea:');
    setTodos([...todos, { task: newTodo, completed: false }]);
  }

  function completeTask(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  }

  return (
    <div>
<center>
    <h1>Tareas</h1>
   <hr></hr>
 <button className='boton boton1' onClick={addTodo}>crear tarea</button>
      <hr></hr>
   <ul>
{todos.map((todo, index) => (
<p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
{todo.task} <button className='botoncompletar botoncompletar1' onClick={() => completeTask(index)}>Completar</button>
</p>
)
)
}
</ul>
</center>
</div>
);
}

export default TodoList;