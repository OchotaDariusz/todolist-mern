export const getTodos = async (setCallback) => {
  const todos = await fetch(
    "https://todolist-mern-app.onrender.com/api/v1/todos",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const fetchedTodos = await todos.json();
  setCallback(fetchedTodos.data);
};
