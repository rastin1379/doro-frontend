import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logoImage from '../assets/logo.svg';

function Navbar() {
    return (
        <AppBar position="static" elevation={1} className="navbar">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <img src={logoImage} alt="Your Logo Name" style={{ height: '50px', width: 'auto' }} />
                </Typography>
                <Button color="inherit" style={{marginRight: '5%'}}>Home</Button>
                <Button color="inherit" style={{marginRight: '5%'}}>DORO Test</Button>
                <Button color="inherit" style={{marginRight: '5%'}}>Resources</Button>
                <Button color="inherit" variant="outlined" style={{borderRadius: '25px', marginRight: '5%'}}>Get Started</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
