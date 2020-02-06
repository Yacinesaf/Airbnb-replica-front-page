import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem, Typography, IconButton, TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Autocomplete from '@material-ui/lab/Autocomplete';



function Guests() {


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
      <Autocomplete
        id="combo-box-demo"
        options={}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Combo box" variant="outlined" fullWidth />
        )}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {guests.map((x, i) => (
          <Grid key={i} container>
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
        ))}
      </Menu>
    </div>
  );
}

export default Guests;
