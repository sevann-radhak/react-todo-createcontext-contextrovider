import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Todo } from '../interfaces/interfaces'

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {
    const { toogleTodo } = useContext(TodoContext)


    const handleDbClick = () => {
        toogleTodo(todo.id)
    }

    return (
        <li
            style={
                {
                    cursor: 'pointer',
                    textDecoration: todo.completed ? 'line-through' : ''
                }}
            onDoubleClick={handleDbClick}>
            {todo.desc}
        </li>
    )
}
