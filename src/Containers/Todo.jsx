<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Todo({taskList}) {

    const tasks = useSelector((state)=>state.taskList)
    
    
    useEffect(()=>{
        console.log(tasks)
    },[tasks])
=======
import React from 'react'
import { Divider, Typography,List, ListItem, ListItemText, Box, Paper } from '@mui/material'
import {DeleteForeverIcon} from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';






//Implementacion de memoria global de redux
//Use dispatch es para hacer algo
//Use selector es para traer o seleccionar algo desde el estado

import { useSelector } from 'react-redux';



function Todo() {

    
    const taskState = useSelector((state) => state.task)

    console.log(taskState)
    
    
>>>>>>> tests
    
    return (
        <>
        <Divider sx={{marginTop:10}}></Divider>
        <Typography variant='h6' sx={{textAlign:'center',marginTop:2}}>
            Your tasks
        </Typography>
        
        <List sx={{width:'100%',maxWidth:360,margin:'0 auto'}}>  
                <ListItem>
                    <Box sx={{width:'100%'}}>
                        <Paper elevation={10} sx={{padding:2,borderRadius:50,width:'100%'}}>
                            <Typography sx={{textAlign:'center'}}>
                                
                            </Typography>
                        </Paper>
                    </Box>
                </ListItem>
                
            
        </List>
        
        {tasks.map((task) => (
                <Paper sx={{textAlign:'center',padding:5,marginTop:5}} elevation={16}>
                    <Typography key={task.id}>{task.tarea}</Typography>
                </Paper>
                
            ))}
        


        

        </>
    )
}

export default Todo