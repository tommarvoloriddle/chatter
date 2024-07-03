import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from 'next/link';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', background: 'rgba(21, 32, 43)' }} flexDirection={'column'} width={'100vw'} height={'100vh'} >
      <CssBaseline />
      <AppBar position="static" sx={{ background: 'rgba(25, 39, 52)'}}>
        <Toolbar >
          <Typography variant="h6" component="div">
            Chatter
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{  background: 'rgba(21, 32, 43)'}} height={"100%"}>
        {children}
      </Box>
    </Box>
  );
};

export default RootLayout;
