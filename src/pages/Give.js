import React, { useState } from 'react'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    makeStyles,
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    ExitToApp as ExitToAppIcon,
} from '@material-ui/icons'
import clsx from 'clsx'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(4)  
    },
    menuButtonHidden: {
        display: 'none'
    },
    title: {
        flexGrow: 1,
    },
    
}))

export default function Give() {

    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleDrawerOpen = () => {
        setOpen(false)
    }

    const handleDrawerClose = () => {
        setOpen(true)
    }

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" className={classes.title}>Give</Typography>
                    <Button
                        color="inherit"
                        startIcon={<ExitToAppIcon />}
                    >
                        logout
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}