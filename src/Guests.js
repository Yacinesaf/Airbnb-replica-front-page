import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem, Typography, IconButton, TextField, makeStyles } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



function Guests() {


  const styles = makeStyles ({
    popoverPaper: {
      width: '100%',
      height: '100%',
      maxHeight: 'unset',
      maxWidth: 'unset',
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('Guests');
  let guests = ['Adults', 'Children', 'Infants'];
  let guestsSubs = ['', 'Ages 2-12', 'Under 2'];
  const [numGuests, setNumGuests] = useState('0');



  return (
    <div>
    <div onClick={(e) => {
      setClicked(!clicked);
      handleClick(e);
    }} style={{border : '0.5px solid rgba(0, 0, 0, 0.39)', borderRadius : 4, MaxWidth : '100%', display : 'flex', padding : '14px'}}>
    <div style={{flexGrow : 1}}>
      <Typography style={{color : 'rgba(0, 0, 0, 0.39)'}}>
       Guests
      </Typography>
    </div>
        {clicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {guests.map((x, i) => (
          <MenuItem key={i}>
            <Grid container>
              <Grid item xs={12} style={{ display: 'flex' }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant='subtitle2'>
                    {x}
                  </Typography>
                  <Typography variant='subtitle2'>
                    {guestsSubs[i]}
                  </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                  <RemoveCircleOutlineIcon />
                  <Typography variant='body2' style={{ padding: '0px 10px' }}>
                    {`${numGuests}+`}
                  </Typography>
                  <AddCircleOutlineIcon />
                </div>
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Guests;
