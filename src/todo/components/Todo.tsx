import { TodoProvider } from "../context/TodoProvider"
import { Pending } from "./Pending"
import { TodoList } from "./TodoList"

export const Todo = () => {
    return (
        <TodoProvider>
            <Pending />
            <TodoList />
        </TodoProvider>
    )
}
