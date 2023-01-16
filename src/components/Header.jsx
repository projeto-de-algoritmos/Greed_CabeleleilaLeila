import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material'
import Logo from '../assets/logo-cabelo-1.png';

export function Header() {
    return (
        <AppBar position="static" style={{ background: '#C100F5' }}>
            <Toolbar sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={Logo} alt="Logo Cabeleleila Leila" height="50"/>
              
                <Typography variant="h1" sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  ml: 1,
                  color: 'black'
                }}>
                    Cabeleleila Leila
                </Typography>
            </Toolbar>
        </AppBar>
    )
}