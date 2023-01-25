import React, { useState } from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import AddTodoButton from "./components/AddTodoButton/AddTodoButton"
import './App.css'

function App() {

    const [todoList, setTodoList] = useState(localStorage.getItem('todoList') || ["1", "drugi"])

    return (
        <div className="App">
            <Header/>
            <AddTodoButton setTodoList={setTodoList} />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}

export default App
