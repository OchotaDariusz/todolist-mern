import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Card from "./components/UI/Card";
import AddTodoButton from "./components/AddTodoButton/AddTodoButton";
import { getTodos } from "./utils/utils";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos(setTodoList)
      .then(() => console.log("Data fetched."))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="App">
      <Header />
      <AddTodoButton setTodoList={setTodoList} />
      <Card>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </Card>
    </div>
  );
}

export default App;
