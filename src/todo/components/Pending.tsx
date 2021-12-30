import { useTodos } from '../hooks/useTodos'

export const Pending = () => {
    const { pendingTodos } = useTodos()

    return (
        <>
            <h1>Todos: {pendingTodos}</h1>
        </>
    )
}
