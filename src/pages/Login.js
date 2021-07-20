import {
    Button,
    TextField,
    Grid,
    CssBaseline,
    Link,
    Typography,
    Container,
    Avatar,
    makeStyles,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {

    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
            // <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Typography component="h1" variant="h5">
            //         Login
            //     </Typography>
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />
            //     <Grid item xs={12} />

            //     <Grid item xs={12}>
            //         <TextField
            //         id="email" 
            //         label="Email" 
            //         variant="outlined" 
            //         fullWidth
            //         />
            //     </Grid>

            //     <Grid item xs={12}>
            //         <TextField 
            //         id="password" 
            //         label="Password" 
            //         variant="outlined" 
            //         fullWidth
            //         />
            //     </Grid>
            //     <Grid item xs={12}>
            //         <Button variant="contained" color="primary" fullWidth>
            //         Login 
            //         </Button>
            //     </Grid>

            //     <Grid container>
            //         <Grid item xs>
            //             <Link href="#" varaint="body2">
            //                 Forgot password?
            //             </Link>
            //         </Grid>
            //     </Grid>


            // </Grid> 
            );
}


