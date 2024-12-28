import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Navbar() {
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const sideBar = (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} onClick={handleDrawerToggle}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgb(22, 22, 22)',
          padding: isLargeScreen ? '50px' : '10px',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: isLargeScreen ? 'center' : 'flex-start',
          }}
        >
          {!isLargeScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          {isLargeScreen &&
            navItems.map((item, index) => (
              <Typography
                key={index}
                variant={isLargeScreen ? 'h1' : 'h6'}
                component="div"
                sx={{
                  padding: isLargeScreen ? '0 100px' : '0 20px',
                  cursor: 'pointer',
                }}
              >
                {item}
              </Typography>
            ))}
        </Toolbar>
      </AppBar>
      {!isLargeScreen && sideBar}
    </Box>
  );
}

export default Navbar;
