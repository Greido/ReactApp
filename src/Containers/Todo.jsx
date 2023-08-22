import React, { useEffect } from 'react'
import { Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Todo({taskList}) {

    const tasks = useSelector((state)=>state.taskList)
    
    
    useEffect(()=>{
        console.log(tasks)
    },[tasks])
    
    return (
        <>

        <Typography variant='h6' sx={{textAlign:'center'}}>
            Your tasks
        </Typography>

        
        {tasks.map((task) => (
                <Paper sx={{textAlign:'center',padding:5,marginTop:5}} elevation={16}>
                    <Typography key={task.id}>{task.tarea}</Typography>
                </Paper>
                
            ))}
        


        

        </>
    )
}

export default Todo