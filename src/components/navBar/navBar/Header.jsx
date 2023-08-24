import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import HeaderDrawer from './HeaderDrawer'

import MenuIcon from '@mui/icons-material/Menu'




function Header() {


    const [open,setOpen]=useState(false)

    return (

        <>

            <AppBar position='static'sx={{background:"#984063"}}>
                <Toolbar>

                    <IconButton
                    color='inherit'
                    size='large'
                    onClick={()=>{setOpen(true)}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6'sx={{flexGrow:1}}>
                        Menu
                    </Typography>
                    <Typography variant='h6'>PilarTecno</Typography>

                </Toolbar>

            </AppBar>

            <Drawer
            open={open}
            anchor='left'
            onClose={()=>setOpen(false)}
            >
                <HeaderDrawer></HeaderDrawer>
            </Drawer>
            {/* <HeaderDrawer/> */}
        </>

)}

export default Header