import React, { useState } from 'react';
import Lista from './Lista.jsx'; 
import '../../styles/Lista.css';

import TodoItem from './TodoItem.jsx';

function Home() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleInputChange = (e) => {
        setNuevaTarea(e.target.value);
    };    

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            const textoLimpio = nuevaTarea.trim();
            if (textoLimpio) {
                const tareaObjeto = {
                    id: Date.now(),
                    text: textoLimpio, 
                };           
             
                setTareas([tareaObjeto, ...tareas]);
                setNuevaTarea('');
            }
        }
    };

    const handleDeleteTodo = (id) => {
        const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    return (
        <div className='todo-envoltura'>
            <div className='todo-card'>
                <input 
                type="text"
                className="todo-input"
                placeholder="¿Qué quieres hacer?"
                value={nuevaTarea}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
                
                <Lista 
                tareas={tareas}
                onDelete={handleDeleteTodo}
                />

                {/* contendeor de las tareas pendientes */}
                <footer className='todo-footer'>
                    {tareas.length} {tareas.length === 1 ? 'item' : 'items'} left 
                </footer>
                </div>
                <div className='todo-stack stack-1'></div>
                <div className='todo-stack stack-2'></div>
            </div>
    );
}

export default Home;
