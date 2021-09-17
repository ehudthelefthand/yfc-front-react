import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Login from './pages/Login'
import Give from './pages/Give'
import GiveType from './pages/GiveType'
import Receipt from './pages/Receipt'
import Supporter from './pages/Supporter'
import Staff from './pages/Staff'
import Department from './pages/Department'
import PaymentType from './pages/PaymentType'
import Dashboard from './pages/Dashboard'


const theme = createTheme({
    typography: {
        fontFamily: [
            'Kanit',
            'sans-serif'
        ].join(',')
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <Router>
                    <Switch>
                    <Route path="/staff">
                            <Staff />
                        </Route>
                        <Route path="/receipt">
                            <Receipt />
                        </Route>
                        <Route path="/supporter">
                            <Supporter />
                        </Route>
                        <Route path="/login">
                            <Login /> 
                        </Route>
                        <Route path="/paymenttype">
                            <PaymentType />
                        </Route>
                        <Route path="/department">
                            <Department />
                        </Route>
                        <Route path="/givetype">
                            <GiveType />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/">
                            <Give />
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default App
