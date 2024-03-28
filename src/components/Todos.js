import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice'
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}> X</button>
                    </li>
                ))}
            </ul>


        </>
    )
}

export default Todos
