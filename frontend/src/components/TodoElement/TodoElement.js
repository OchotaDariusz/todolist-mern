import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import {getTodos} from "../../utils/utils"
import './TodoElement.css'

export default function TodoElement({setTodoList, taskName, taskID}) {
    const [isTaskRemoving, setIsTaskRemoving] = useState(false)
    const removeElement = () => {
        setIsTaskRemoving(true)
        fetch('https://todolist-mern-app.onrender.com/api/v1/todos', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskID
            })
        }).then(() => {
            getTodos(setTodoList).then(() => {
                console.log('Data fetched.')
                setIsTaskRemoving(false)
            })
                .catch(err => console.error(err.message))
        }).catch(err => console.error(err.message))
    }

    return (
        <div className="todo-element" onClick={removeElement}>
            <hr className="separator"/>
            {
                isTaskRemoving ? <CircularProgress/> :
                    <Typography variant="subtitle1" component="p">
                        {taskName}
                    </Typography>
            }
        </div>
    )
}