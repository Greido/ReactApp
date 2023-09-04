import React from 'react'
import { Container,Box,Grid,Paper, Typography, FormGroup,TextField,Button,FormControl } from '@mui/material'
import { useState } from 'react'
import Todo from '../Containers/Todo'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/actions/taskActions';



function FormTask() {

    const [task,setTask]=useState('')
    const dispatch = useDispatch()

    function handleSubmit(event){
        event.preventDefault();


        const nuevaTarea = {
            id:Date.now(),
            tarea:task,
            completado:0,
        }

        //Llamo a la accion addTask
        dispatch(addTask(nuevaTarea))
        //Limpiar el campo de entrada
        setTask('');
    }

return (
    <>
        <Typography variant='h6' sx={{textAlign:'center'}}>
            Enter the task what you will do.
        </Typography>
        <FormGroup sx={{display:'flex',flexDirection:'column',alignContent:'center',marginTop:4}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                <TextField 
                id="outlined-basic" 
                label="Task" variant="outlined" 
                type='text'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                sx={{width:'100%',textAlign:'center',margin:'0 auto'}} />


                <Button variant="contained"color='secondary' 
                sx={{background:'#984063',marginTop:2}} 
                onClick={handleSubmit}
                >
                    Add Task 
                </Button>
                </Box>

            </form>
        </FormGroup>

    </>
    )
}

export default FormTask