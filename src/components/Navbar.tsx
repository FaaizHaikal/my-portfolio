import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Navbar() {
  const navItems = ['About', 'Experiences', 'Projects', 'Contacts'];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigateTo = (item: string) => () => {
    const id = '#' + item;
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.error(`Element with id ${id} not found`);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgb(22, 22, 22)',
        zIndex: 1000,
      }}
    >
      <Toolbar>
        {/* Large screen navbar */}
        <Box
          sx={{
            display: isSmallScreen ? 'none' : 'flex',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item}
              variant="h6"
              sx={{
                margin: '0 30px',
                padding: '0 10px',
                borderRadius: '5px',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'rgb(255, 255, 255)',
                  color: 'rgb(22, 22, 22)',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Small screen navbar */}
        <Box
          sx={{
            display: isSmallScreen ? 'flex' : 'none',
            width: '100%',
          }}
        >
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: 'rgb(22, 22, 22)',
                color: 'rgb(255, 255, 255)',
              },
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem
                  sx={{
                    margin: '10px 0',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    ':hover': {
                      backgroundColor: 'rgb(255, 255, 255)',
                      color: 'rgb(22, 22, 22)',
                    },
                  }}
                  key={item}
                  onClick={navigateTo(item)}
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
