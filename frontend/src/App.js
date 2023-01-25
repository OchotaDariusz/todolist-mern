import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import AddTodoButton from "./components/AddTodoButton/AddTodoButton"
import { getTodos } from "./utils/utils";
import './App.css'


function App() {

    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        getTodos(setTodoList).then(() => console.log('Data fetched.'))
            .catch(err => console.error(err.message))
    }, [])

    return (
        <div className="App">
            <Header />
            <AddTodoButton setTodoList={setTodoList} />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}

export default App
