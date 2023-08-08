import React from 'react'
import { Container,Box,Grid,Paper, Typography, FormGroup,TextField,Button,FormControl } from '@mui/material'
import { useState } from 'react'
import Todo from '../Containers/Todo'



function FormTask() {

    const [task,setTask]=useState("")
    
    const [taskList,setTaskList]=useState([])


    function handleSubmit (event){
        event.preventDefault()
        console.log(task)
        const nuevaTarea = {
            id : Date.now(),
            tarea :task,
            completado: false
        }
    
        const temp = [nuevaTarea,...taskList]
        setTaskList(temp)
        setTask('')
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
                onChange={event=>setTask(event.target.value)} 
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
        <Todo handleSubmit={handleSubmit} taskList={taskList}/>
    </>
    )
}

export default FormTask