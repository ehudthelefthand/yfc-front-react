import React, { useState } from 'react'
import clsx from 'clsx'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    makeStyles,
    Drawer,
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    ExitToApp as ExitToAppIcon,
} from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },

    toolbar: {
        paddingRight: 24,
    },

    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px' 
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },

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
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
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
            <Drawer>
                <div>

                </div>
            </Drawer>
        </div>
    )
}