import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    //     const { todoState } = useContext(TodoContext)
    //     const { todos } = todoState

    const { todos } = useTodos()

    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
        </ul>
    )
}
