import React, {useRef} from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import './AddTodoModal.css'

export default function AddTodoModal({ open, handleClose, setTodoList }) {
    const taskName = useRef()

    const addNewTodo = e => {
        e.preventDefault()
        setTodoList(prevList => {
            return [...prevList, taskName.current.value]
        })
        handleClose()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <Box className="modal-window" component="form" autoComplete="off" onSubmit={addNewTodo}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{my: 2}}>
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