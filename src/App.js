import Login from './pages/Login';
import Give from './pages/Give';
import Supporter from './pages/Supporter';
import Receipt from './pages/Receipt';
import { CssBaseline } from '@material-ui/core';
import reactDom from 'react-dom';
import React from 'react';
import './App.css';
import { Router } from 'express';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
                <Router path='/Give'>
                    Give
                </Router>
                <Router path='/'>
                    Login
                </Router>
        </React.Fragment>

    )
}

export default App;
