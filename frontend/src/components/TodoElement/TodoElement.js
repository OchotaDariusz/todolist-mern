import React from 'react'
import Typography from '@mui/material/Typography'
import './TodoElement.css'

export default function TodoElement({setTodoList, taskName, taskIndex}) {
    const removeElement = () => {
        setTodoList(prevList => {
                const newTodoList = []
                for (let i = 0; i < prevList.length; i++) {
                    if (i === taskIndex) continue
                    newTodoList[i] = prevList[i]
                }
                return newTodoList
            }
        )
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