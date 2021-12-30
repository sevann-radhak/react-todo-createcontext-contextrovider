import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Learn React',
            completed: false
        }, {
            id: '2',
            desc: 'Enjoy the course',
            completed: false
        }],
    completed: 0,
    pending: 2
}


interface TodoProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    return (
        <TodoContext.Provider value={{ todoState }}>
            {children}
        </TodoContext.Provider>
    )
}
