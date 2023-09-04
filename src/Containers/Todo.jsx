
import React, { useEffect } from 'react'
import { Paper, Typography,Grid, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateTaskList } from '../store/features/taskReducer';
import PendingTask from '../components/taskStatus/PendingTask';

function Todo() {

    const tasks = useSelector((state)=>state.tasks.taskList)
    
    const dispatch = useDispatch();


    useEffect(()=>{
        console.log("Tarea CARGADA: ", tasks) 

    },[])
    
    //Filtrado de tareas segun su estado
    
    const pendingTasks = tasks.filter(task => task.completado === 0);
    


    //Funcion para mover la tarea de incomplete a Pending

    const moveToPending = (taskId) =>{
        dispatch(updateTaskList(taskId,1))//Cambia el estado a 1
    }


    return (
        <>

        {/* Grid for incomplete tasks */}

        <Grid container>
            <Grid item xs={4}>

                    <Typography variant='p'>
                        Incomplete tasks
                    </Typography>


                
                    {pendingTasks.map((task)=>(
                        <Paper elevation={6} sx={{marginTop:4,display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}
                        key={task.id}
                        >
                            <Typography padding={2} variant='p' sx={{textAlign:'center'}} >
                                Task: {task.tarea}
                            </Typography>
                            
                            <Button onClick={() => moveToPending(task.id)}>Add to progress</Button>

                            
                            <Button
                            onClick={()=>dispatch(updateTaskList(task.id,2))}
                            >
                                Add to complete
                            </Button>
                            </Paper>
                            
                    ))}

                
            </Grid>
        </Grid>

            <PendingTask/>
        </>
    )
}

export default Todo