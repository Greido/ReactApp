import React from 'react'
import { Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Perfil from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useState } from 'react';

import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material';


function HeaderDrawer() {
    
    


        const [open, setOpen] = useState(false);
        const [menuAnchor, setMenuAnchor] = useState(null);

        const handleMenuOpen = (event) => {
            setMenuAnchor(event.currentTarget);
        };

        const handleMenuClose = () => {
            setMenuAnchor(null);
        };
    
    
    
    /* const [open,setOpen]=useState(false) */
    


    return (
        <>
            <Box sx={{width:200,bgcolor:'#984063',height:'100vh'}}>
                <nav>
                    <List> 
                    {/* Inicio */}
                    <Link to={'/'} >
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
                            <ListItemButton onClick={handleMenuOpen} >
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Pages'>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                            <Link to={'/pokedex'}>
                                <MenuItem onClick={handleMenuClose}>Pokedex</MenuItem>
                            </Link>
                            
                            <Link to={'/myApi'}>
                                <MenuItem onClick={handleMenuClose}>My first Api</MenuItem>
                            </Link>
                            

                        </Menu>
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