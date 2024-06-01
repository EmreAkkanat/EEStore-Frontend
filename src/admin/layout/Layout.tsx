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
    <div>
      <CssBaseline />

      <Box sx={{ display: 'flex' }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;