import { Avatar, Box, Container, Paper, Skeleton, Typography } from '@mui/material'
import React from 'react'

function Profile(props) {

    const {user , pic} = props
    
    console.log(pic)
    return (
        <>
            <Typography variant='h2' textAlign={'center'} sx={{p:4,fontWeight:600}}>My Profile</Typography>
            
            <Box sx={{ background: 'ligth', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center',borderRadius:200}} >

                

                <Paper elevation={24} sx={{ width: '50%',height:800,marginTop:10 }}>                    
                    
                    <Box sx={{display:'flex',flexWrap:'wrap',marginTop:2,justifyContent:'space-between',alignItems:'center',flexDirection:'column',alignContent:'center'}}>
                        

                        {user?(
                            <>
                            <Avatar sx={{width:200,height:200}}
                            src={pic.thumbnailUrl}
                            >

                            </Avatar>
                            <Typography variant="text" sx={{ fontSize: '1.5rem',width:'40%',marginRight:'auto,auto',marginTop:2,marginBottom:4 }}> 
                                Nombre y Apellido: {user.name}     
                            </Typography>

                            <Typography variant="text" sx={{ fontSize: '1.5rem',width:'40%',marginRight:'auto,auto',marginTop:0 }}>
                                Email: {user.email}
                            </Typography>

                            <Typography variant="text" sx={{ fontSize: '1.5rem',width:'40%',marginRight:'auto,auto',marginTop:4 }}>
                                Numero de telefono: {user.phone}
                            </Typography>
                            
                            <Typography variant="text" sx={{ fontSize: '1.5rem',width:'40%',marginRight:'auto,auto',marginTop:4 }}>
                                Nombre de usuario: {user.username}
                            </Typography>



                            </>
                        ):(
                            <>
                                <Skeleton variant="circular" width={300} height={300} sx={{marginLeft:7}} />
                                <Typography variant="text" sx={{ fontSize: '1.5rem',width:'40%',marginRight:'35%',height:200 }}> 
                                Cargando Datos...
                                </Typography>
                            </>
                        )}
                    
                        <>
                        </>
                    </Box>
                    <Typography variant='h5' sx={{ fontSize: '1.5rem',width:'20%',marginLeft:'1%',height:100 }}>
                        
                    </Typography>   
                </Paper>
            </Box>
        
        </>
    )
}

export default Profile