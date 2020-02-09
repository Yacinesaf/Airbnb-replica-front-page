import React from 'react';
import { Toolbar, Button, IconButton } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import img from './logo.png'

function Navbar({open}) {
  return (
    <div >
      <Toolbar style={{ padding: '10px 25px' }}>
        <div style={{ flexGrow: 1, display : 'flex' }}>
          <img alt='yes' src={img} style={{ height: 35, width: 35 }} />
          <IconButton onClick={open}>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </IconButton>
        </div>
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
      </Toolbar>
    </div>
  );
}

export default Navbar;
