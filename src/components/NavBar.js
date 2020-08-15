import React, { useContext } from 'react'
import {AppBar, Typography, Button, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AuthContext from '../firebase/auth/AuthContext'

export default function NavBar() {
    const {auth} = useContext(AuthContext)
    console.log(auth);
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    FireGram
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
