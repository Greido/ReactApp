import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Perfil from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useState } from 'react';

import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material';
function HeaderDrawer() {
    
    const [open,setOpen]=useState(false)
    


    return (
        <>
            <Box sx={{width:200,bgcolor:'#984063',height:'100vh'}}>
                <nav>
                    <List> 
                    {/* Inicio */}
                    <Link to={'/'}>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Home/>
                                    </ListItemIcon>
                                    <ListItemText primary='Home' sx={{textDecoration:'none',color:'white',textDecorationLine:'none'}}>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        {/* Perfil */}
                        <Link to={'/profile'}>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Perfil/>
                                    </ListItemIcon>
                                    <ListItemText primary='Profile' sx={{textDecoration:'none',color:'white',textDecorationLine:'none'}}>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        {/* Dashboard */}

                        <ListItem>
                            <ListItemButton onClick={()=>{setOpen(true)}} >
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Pages'>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav>
                        {/* settings */}
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Settings'>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        {/* Cerrar sesion */}
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ExitToAppIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Exit'>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                </nav>
            </Box>
        </>
    )
}

export default HeaderDrawer