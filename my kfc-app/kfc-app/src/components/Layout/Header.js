import React, {useState} from 'react'
import { AppBar, Box, Button, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import restaurantIcon from '../../components/images/kfc-logo.jpg';
import {Link} from 'react-router-dom'
import '../../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const textStyle = {
    color: 'black', // Change text color to black
    fontFamily: 'Montserrat, sans-serif', // Example of using a Google Font - Montserrat
    fontWeight: 'bold', // Apply bold font weight
    fontSize: '24px', // Adjust font size
  };
  const [mobileOpen, setMobileOpen] = useState(false)
  
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //menu drawer
  const drawer= (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<img
              src={restaurantIcon}
              alt="kfc-logo"
              style={{ width: '100px', marginRight: '20px' }} // Adjust the width and styling as needed
            />

            <Typography variant="h6" component="div" style={textStyle} sx={{flexGrow: 1, 
            my:2}}>
              KFC <i>Banda</i>
            </Typography>
            <Divider />
           
              <ul className= "mobile-navigation">
                <li>
                  <Link to= {'/'}>Home</Link>
                </li>
                <li>
                  <Link to= {'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to= {'/about'}>About</Link>
                </li>
                <li>
                  <Link to= {'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to= {'/cart'}>Cart</Link>
                </li>
                <li>
                 <Link to= {'/login'} >
                  <Button variant="contained">Login</Button>
                 </Link>
                </li>
                
                
              </ul>            
    </Box>
  )
 
  return (
    <>
        <Box>
          <AppBar component={'nav'} sx={{bgcolor: "orange"}}>
            <Toolbar style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <IconButton color="black" aria-label="open drawer" edge ="start" sx={{mr: 2, display: {sm:'none'},}} 
              onClick={handleDrawerToggle}>
                <MenuIcon />

              </IconButton>
            <img
              src={restaurantIcon}
              alt="kfc-logo"
              style={{ width: '100px', marginRight: '20px' }} // Adjust the width and styling as needed
            />

            <Typography variant="h6" component="div" style={textStyle} sx={{flexGrow: 1}}>
            KFC <i>Banda</i>
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
              <ul className= "navigation-menu">
                <li>
                  <Link to= {'/'}>Home</Link>
                </li>
                <li>
                  <Link to= {'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to= {'/about'}>About</Link>
                </li>
                <li>
                  <Link to= {'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to= {'/cart'}>Cart</Link>
                </li>
                <li>
                <Link to= {'/login'} >
                  <Button variant="contained" style={{ background: 'black'}}>Login</Button>
                 </Link>
                </li>
                
              </ul>

            </Box>
            </Toolbar>
           
          </AppBar>
          <Box component="nav">
            <Drawer variant= "temporary" open={mobileOpen} onClose={handleDrawerToggle} 
            sx={{display:{xs:'block', sm:'none'}, '& .MuiDrawer-paper':{
              boxSizing:'border-box',
              width:'240px'
            }}}>
             {drawer}
            </Drawer>
          </Box>
          <Box >
            <Toolbar />
          </Box>
          
        </Box>
    </>
  )
}

export default Header