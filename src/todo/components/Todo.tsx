import { TodoProvider } from "../context/TodoProvider"
import { TodoList } from "./TodoList"

export const Todo = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    )
}
