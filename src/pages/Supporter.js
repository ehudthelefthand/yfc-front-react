import React, { useState } from 'react'
import clsx from 'clsx'
import {mainListItems} from './templates/listItems'
import { AppBar,
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
         withStyles,
         TableContainer,
         Table,
         TableCell,
         TableHead,
         TableRow,
         TableBody,
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

    table: {
        minWidth: 250,
       },

}));

/** Table Style */
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.bule,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const rows = [
    createData('0001', 'ผู้ถวายคนที่ 1', 400),
    createData('0002', 'ผู้ถวายคนที่่ 2', 1000),
    createData('0003', 'ผู้ถวายคนที่่ 3', 500),
];

function createData(code_ID, Fullname, Phone){
    return { code_ID, Fullname, Phone};
}

export default function Supporter() {
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
                    <Typography component="h1" variant="h6" color="inherit" className={classes.title}>Supporter</Typography>
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
                <List> {mainListItems} </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}></div>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell> Staff ID </StyledTableCell>
                                    <StyledTableCell align="center"> Full Name </StyledTableCell>
                                    <StyledTableCell align="center"> Phone Number </StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                        <TableBody>
                                {rows.map((row) => (
                        <StyledTableRow key={row.code_ID}>
                            <StyledTableCell component="th" scope="row">
                                {row.code_ID}
                            </StyledTableCell>
                            <StyledTableCell align="center"> {row.Fullname} </StyledTableCell>
                            <StyledTableCell align="center"> {row.Phone} </StyledTableCell>
                        </StyledTableRow>
                    ))}
               </TableBody>
            </Table>
        </TableContainer>
    
                    </Grid>
                </Container>
            </main>
        </div>

    );
}