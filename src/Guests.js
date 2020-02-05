import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem, Typography, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


function Guests() {

  let guests = ['Adults', 'Children', 'Infants'];
  let guestsSubs = ['', 'Ages 2-12', 'Under 2'];
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('Guests');
  const [anchorEl, setAnchorEl] = useState(null);
  const [numGuests, setNumGuests] = useState('0');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} variant='outlined' fullWidth style={{textAlign : 'left', textTransform : 'none', padding : '14px 14px'}}>
        {text}
        {clicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
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
              <Grid item style={{ display: 'flex' }}>
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
