import React from 'react'
import { Container,Box,Grid,Paper, Typography, FormGroup,TextField,Button } from '@mui/material'

import { useState,useEffect } from 'react'
import { Form } from 'react-router-dom'

function Home() {


    const [task,setTask]=useState(null)

    return (
        <>
        <Container maxWidth="lg">
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Contenido del primer box */}
                        <Box sx={{ p: 2, bgcolor: '', color: 'white' }}>
                            <Paper elevation={4} sx={{padding:3,borderRadius:8}}>
                                <Typography variant='h4' sx={{textAlign:'center'}}>
                                    To do list
                                </Typography>
                            </Paper>

                            <Paper elevation={4} sx={{marginTop:8,borderRadius:8,padding:2}}>
                                <Typography variant='h6' sx={{textAlign:'center'}}>
                                    Enter the task what you will do.
                                </Typography>
                                <FormGroup sx={{display:'flex',alignContent:'center',marginTop:4}}>
                                    <Form>
                                        <TextField id="outlined-basic" label="Task" variant="outlined" sx={{width:'50%',textAlign:'center'}} />
                                        <Button variant="contained"color='secondary'  sx={{background:'#984063',marginTop:2}} >Agregar</Button>
                                    </Form>

                                </FormGroup>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
    )   
}

export default Home