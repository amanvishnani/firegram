import React from 'react'
import { AppBar, Typography, Button, IconButton, Toolbar, Avatar, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import useGoogleAuth from "../firebase/auth/useGoogleAuth";
import useAuth from "../firebase/auth/useAuth";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const { auth } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const { authenticate, logout } = useGoogleAuth();

    // console.log(auth);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    async function loginWithGoogle() {
        await authenticate()
    }

    function renderLogin() {
        return <Button color="inherit" onClick={_ => loginWithGoogle()}>Login</Button>;
    }

    function renderProfileInfo() {
        return <>
            <Avatar alt={auth.displayName} onClick={handleMenuClick} src={auth.photoURL} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                getContentAnchorEl={null}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MenuItem onClick={_ => logout()}>Logout</MenuItem>
            </Menu>
        </>
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <InstagramIcon />
                    </IconButton>
                    <Typography variant="h6" align="center" className={classes.title}>
                        FireGram
                    </Typography>
                    {auth == null ? renderLogin() : renderProfileInfo()
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}
