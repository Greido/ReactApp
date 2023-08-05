import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Perfil from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

function PagesDrawer() {

    

    return (
        <>

            <Box sx={{width:50,bgcolor:'#984063'}}>
                <List>
                    <ListItem>
                        <ListItemButton>    
                            <ListItemIcon>
                                <Perfil/>
                            </ListItemIcon>
                            <ListItemText primary="page1"/>
                            </ListItemButton>
                        </ListItem>
                    
                </List>
            </Box>

        
        </>
    )
}

export default PagesDrawer