import React from 'react'
import Typography from '@mui/material/Typography'
import { getTodos } from "../../utils/utils"
import './TodoElement.css'

export default function TodoElement({setTodoList, taskName, taskID}) {
    const removeElement = () => {
        fetch('http://localhost:8080/api/v1/todos', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskID
            })
        }).then(() => {
            getTodos(setTodoList).then(() => console.log('Data fetched.'))
                .catch(err => console.error(err.message))
        }).catch(err => console.error(err.message))
    }

    return (
        <div className="todo-element" onClick={removeElement}>
            <hr className="separator"/>
            <Typography variant="subtitle1" component="p">
                {taskName}
            </Typography>
        </div>
    )
}