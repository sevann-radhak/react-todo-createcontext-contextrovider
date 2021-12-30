import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    const { todoState } = useContext(TodoContext)
    const { todos } = todoState

    console.log(todoState)
    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
        </ul>
    )
}
