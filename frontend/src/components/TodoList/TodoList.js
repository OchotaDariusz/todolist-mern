import React from 'react'
import TodoElement from "../TodoElement/TodoElement"

export default function TodoList({ todoList, setTodoList }) {

    return (
        <div>
            { todoList.map((task, index) => <TodoElement
                setTodoList={setTodoList}
                taskName={task}
                key={index}
                taskIndex={index}
            />) }
        </div>
    )
}