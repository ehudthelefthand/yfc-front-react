import React, { useState } from 'react'
import clsx from 'clsx'
import { MainListItems } from './templates/ListItems'
import { 
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    makeStyles,
    Drawer,
    List,
    Divider,
    Container,
    Grid,
    Paper,
} from '@material-ui/core'
import {
    Menu as MenuIcon,
    ExitToApp as ExitToAppIcon,
    ChevronLeft,
} from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100%'
    },
  
    toolbar: {
        paddingRight: 24,
    },

    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
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

    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
    },

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },

    appBarSpacer: theme.mixins.toolbar,

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function Admin({ children }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="open drawer"
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
            <Drawer
                variant="permanent" 
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft/>
                    </IconButton>
                </div>
                <Divider />
                <List> {MainListItems} </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}></div>
                <Container maxWidth="lg" className={classes.container}>
                   { ...children }
                </Container>
            </main>
        </div>

    )
}