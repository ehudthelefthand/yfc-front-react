import { 
    Button, 
    Card, 
    CardContent, 
    CardActions,
    TextField, 
    Grid
} from '@material-ui/core'
import React from 'react'

export default function Login() {
    return (
        <Grid container spacing={2} justifyContent="flex-start">
            <Grid item xs={12}>
                <TextField id="email" label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="password" label="Password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </Grid>
        </Grid>
    )
}
