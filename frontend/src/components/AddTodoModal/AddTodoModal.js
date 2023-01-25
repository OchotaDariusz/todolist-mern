import React, {useRef} from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { getTodos } from "../../utils/utils"
import './AddTodoModal.css'

export default function AddTodoModal({ open, handleClose, setTodoList }) {
    const taskName = useRef()

    const addNewTodo = e => {
        e.preventDefault()

        fetch('http://localhost:8080/api/v1/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: taskName.current.value
            })
        }).then(() => {
            getTodos(setTodoList).then(() => {
                console.log('Data fetched.')
                handleClose()
            }).catch(err => console.error(err.message))
        }).catch(err => console.error(err.message))
    }

    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-title"
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <Box className="modal-window" component="form" autoComplete="off" onSubmit={addNewTodo}>
                    <Typography id="modal-title" variant="h6" component="h2" sx={{my: 2}}>
                        Add new task
                    </Typography>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            inputRef={taskName}
                        />
                    </div>
                    <Button variant="contained" type="submit" sx={{my: 2}}>Add</Button>
                </Box>
            </Fade>
        </Modal>
    )
}