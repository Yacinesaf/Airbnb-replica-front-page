import React from 'react';
import { Toolbar, Button, IconButton } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import img from './logo.png'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function Navbar({ open }) {

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <div >
      <Toolbar style={{ padding: '10px 39px' }}>
        <div style={{ flexGrow: 1, display: 'flex' }}>
          <img alt='yes' src={img} style={{ height: 35, width: 35 }} />
          <IconButton onClick={open} style={{display : mdDown ? '' : 'none'}}>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </IconButton>
        </div>
        <div style={{display : mdDown ? 'none' : ''}}>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >
            <LanguageIcon fontSize='inherit' style={{ paddingRight: 5 }} />
            English(CA)
          </Button>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >$ CAD</Button>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >Host a home</Button>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >Host an experience</Button>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >Help</Button>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >Sign up</Button>
          <Button size='large' style={{ color: 'white', textTransform: 'none' }} >Log in</Button>
        </div>
      </Toolbar>
    </div>
  );
}

export default Navbar;
