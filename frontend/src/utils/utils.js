export const getTodos = async (setCallback) => {
    const todos = await fetch('http://localhost:8080/api/v1/todos', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const fetchedTodos = await todos.json()
    setCallback(fetchedTodos.data)
}