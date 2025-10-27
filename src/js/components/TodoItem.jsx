import React from 'react'

function TodoItem({ tarea, onDelete }) {

  return (
    <li className='todo-item'>
      <span className='todo-item-text'>{tarea.text}</span>

      <button
      onClick={() => onDelete(tarea.id)}
      className='todo-item-delete'
      >
        &times; 
      </button>
    </li>        
  );
}

export default TodoItem;