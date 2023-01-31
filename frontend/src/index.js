import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './index.css';
import App from './App';

function BackendConnector() {
    const [isBackendConnected, setIsBackendConnected] = useState(false)

    useEffect(() => {
        setIsBackendConnected(false)
        fetch('https://todolist-mern-app.onrender.com', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) setIsBackendConnected(true)
            })
            .catch(err => console.error(err.message))
    }, [])

    return (
            (isBackendConnected) ? <App/> : <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
                                                <CircularProgress/>
                                            </Box>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BackendConnector/>
    </React.StrictMode>
);
