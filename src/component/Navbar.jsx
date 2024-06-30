import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='success'>
        <Toolbar>
         
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            My React App
          </Typography>
          <Button color="inherit"><Link to={'/b'} style={{textDecoration:"none",color:"white"}}>Basic_table</Link></Button>
          <Button color="inherit"><Link to={'/c'} style={{textDecoration:"none",color:"white"}}>Basic_card</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar