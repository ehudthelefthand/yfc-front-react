import { Button, TextField, Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';

function Copyright(){
    return(
        <Typography variant="body1" color="textSecondary" alignItems="center">
            <Link color="inherit" href="https://mater-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}    
        </Typography>
    );
}

// const useStyles = makeStyles((theme) =>({
//     parper: {
//         marginTop:
//     }
// }));

export default function Login() {
    
    return (
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Grid item xs={12}/>
                <Grid item xs={12}/>
                <Grid item xs={12}/>

                <Grid item xs={12}>
                    <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined" 
                    fullWidth
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField 
                    id="password" 
                    label="Password" 
                    variant="outlined" 
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>
                    Login 
                    </Button>
                </Grid>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" varaint="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                </Grid>


            </Grid> 
            );
}


