import React from 'react'
import { Divider, Typography,List, ListItem, ListItemText, Box, Paper } from '@mui/material'
import {DeleteForeverIcon} from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';


//Implementacion de memoria global de redux

import {useSelector } from 'react-redux/es/hooks/useSelector';


function Todo() {


    /* const {task,taskList} = props */

    const task = useSelector((state)=>state.task)
    
    
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
        

        </>
    )
}

export default Todo