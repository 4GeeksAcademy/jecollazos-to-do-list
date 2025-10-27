
import TodoItem from './TodoItem.jsx';

function Lista ({ tareas, onDelete }) {

  return (
    <ul className='todo-list'>
      {tareas.length === 0 ? (
        <li className='todo-list-empty'>
            No hay tareas aún, ¡Agrega una nueva!
        </li>

      ) : ( 
        tareas.map((tarea) => (
          <TodoItem
          key={tarea.id}
          tarea={tarea}
          onDelete={onDelete}
          /> 
        ))
      )}
    </ul>
  );
}

export default Lista;