import React, { useEffect } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import  updateStatus  from '../../store/features/taskReducer';


function PendingTask() {

    const dispatch = useDispatch();

    const inProgressTasks = useSelector((state)=>state.tasks.taskList.filter((task)=>task.completado===1));

    useEffect(()=>{
        console.log('una tarea se actualizo', inProgressTasks)
    },[inProgressTasks])


    const handleMoveToComplete = (taskId) => {
        dispatch(updateStatus(taskId,2))//Cambia el estado a 2 {Complete!}
    }

    
    return (
        
        
        <>
        <Typography variant='p'>
            PendingTasks
        </Typography>


        {inProgressTasks.map((task) => (
                <Paper elevation={6} key={task.id} sx={{display:'flex',flexDirection:'column'}}>
                    <Typography padding={2} variant='p' sx={{ textAlign: 'center' }}>
                        Task: {task.tarea}
                    </Typography>
                    <Button onClick={() => handleMoveToComplete(task.id,2)}>Add to complete</Button>
                </Paper>
            ))}


        </>
    )
}

export default PendingTask