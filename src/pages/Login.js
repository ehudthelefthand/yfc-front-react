import { Button,
        TextField,
        Grid,
        Link,
        Typography,
        Container,
        Avatar,
        ThemeProvider,
        CssBaseline,        
        FormControlLabel,
        Checkbox,
        Icon,
    } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="#">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avater: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Icon></Icon>
                    </Avatar>
                <Typography component="h1" variant="h5">
                    Login
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                     />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
                </div>
            </Container>



            // <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Typography component="h1" variant="h5">
            //         Login
            //     </Typography>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>
            //     <Grid item xs={12}/>

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


