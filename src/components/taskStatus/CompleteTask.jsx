import React from 'react'
import { useEffect } from 'react'
import { Paper, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function CompleteTask() {

    const completeTasks = useSelector((state)=>state.tasks.taskList.filter((task)=>task.completado===2));


    useEffect(()=>{
        console.log('Tarea completada', completeTasks)
    },[completeTasks])
    


    return (

        
        <>
        <Typography variant='p'>
            Complete Task
        </Typography>


        {completeTasks.map((task) => (
                <Paper elevation={6} key={task.id} sx={{display:'flex',flexDirection:'column'}}>
                    <Typography padding={2} variant='p' sx={{ textAlign: 'center' }}>
                        Task: {task.tarea}
                    </Typography>
                </Paper>
            ))}


        </>
    )
}

export default CompleteTask