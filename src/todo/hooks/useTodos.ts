import { TodoContext } from './../context/TodoContext';
import { useContext } from 'react';

export const useTodos = () => {
    const { todoState, toogleTodo } = useContext(TodoContext)
    const { todos } = todoState

    return {
        todos: todos,
        pendingTodos: todos.filter(t => !t.completed).length,
        toogleTodo: toogleTodo
    }
}