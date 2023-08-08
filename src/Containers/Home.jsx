import React from 'react'
import { Container,Box,Grid,Paper, Typography, FormGroup,TextField,Button,FormControl } from '@mui/material'


import FormTask from '../components/FormTask'
import Todo from './Todo'

function Home() {

    return (
        <>
        <Container maxWidth="lg">
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                         {/* Contenido del primer box */}
                        <Box sx={{ p: 2, bgcolor: '', color: 'white' }}>
                            <Paper elevation={4} sx={{padding:3,borderRadius:8}}>
                                <Typography variant='h4' sx={{textAlign:'center',fontWeight:600}}>
                                    TO DO LIST
                                </Typography>
                            </Paper>

                            <Paper elevation={4} sx={{marginTop:8,borderRadius:8,padding:2}}>
                                    <FormTask/>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Container maxWidth="lg">
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                         {/* Contenido del primer box */}
                        <Box sx={{ p: 2, bgcolor: '', color: 'white' }}>
                            <Paper elevation={4} sx={{padding:3,borderRadius:8}}>
                                <Todo/>
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