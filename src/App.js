import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import Login from './pages/Login'
import Give from './pages/Give'
import Receipt from './pages/Receipt'
import Supporter from './pages/Supporter'

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/">
                        <Give />
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
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App
