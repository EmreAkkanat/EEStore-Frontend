import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { Box, CssBaseline, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <div style={{maxHeight: "100vh", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{p:3, width:"100%", minWidth:"300px", height: "100vh", maxHeight: "100vh", overflow: "hidden", display: "flex", flexDirection: "column",flexGrow: 1 }}>
          <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </div>
  );
};

export default Layout;