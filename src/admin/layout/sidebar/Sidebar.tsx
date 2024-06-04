import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

import { DrawerHeader, AppBar, Drawer } from "./SidebarMUI";

// icons
import { IoHomeSharp } from "react-icons/io5";
import { FaAngleLeft, FaBoxOpen, FaBars } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";


export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginLeft: -1.8, marginRight: 5, ...(open && { display: 'none' }) }}><FaBars /></IconButton>
          <Typography variant="h6" noWrap component="div">Admin</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <FaBars /> : <FaAngleLeft />}</IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {[
            { name: 'Home', link: "/admin", icon: <IoHomeSharp /> }
          ].map((text, index) => (
            <NavLink key={index} to={text.link} title={text.name}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', fontSize: '120%' }}>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Divider />

        <List>
          {[
            { name: "Categories", link: "/admin/categories", icon: <TbCategoryFilled /> },
            { name: "Products", link: "/admin/products", icon: <FaBoxOpen /> },
            { name: "Orders", link: "/admin/orders", icon: <FaBagShopping /> }
          ].map((text, index) => (
            <NavLink key={index} to={text.link} title={text.name}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', fontSize: '130%' }}>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
}