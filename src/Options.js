import React from 'react'
import { Typography, IconButton, Card, Grid } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';



function Options({ guests, addingGuests, removingGuests, clearingGuests, saveButton}) {
  let numGuests = guests.adults.guest + guests.children.guest + guests.infants.guest
  let objKeys = Object.keys(guests)

  return (

    <Card style={{ padding: '5px 15px', width: 308, position: 'absolute', zIndex: 10, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', borderRadius: 2 }}>
      {objKeys.map((x, i) => (
        <div key={i} style={{ display: 'flex', margin: '15px 0px', alignItems: 'center' }}>
          <div style={{ flexGrow: 1 }}>
            <Typography variant='h6'>
              {guests[x].type}
            </Typography>
            {guests[x].sub ? <Typography variant='subtitle2'>
              {guests[x].sub}
            </Typography> : null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton disabled={guests[x].guest === 0 ? true : false} onClick={() => {
              removingGuests(x);
            }}>
              <RemoveCircleOutlineIcon fontSize='large' style={{ color: guests[x].guest === 0 ? '' : '#008489' }} />
            </IconButton>
            <Typography variant='body2' style={{ padding: '0px 10px' }}>
              {`${guests[x].guest}+`}
            </Typography>
            <IconButton onClick={() => {
              addingGuests(x);
            }}>
              <AddCircleOutlineIcon fontSize='large' style={{ color: '#008489' }} />
            </IconButton>

          </div>
        </div>
      ))}
      <Grid container>
        <Grid item xs={6} >
          <Grid container justify='flex-start'>
            <Grid item xs={12}>
                <Typography style={{ color: 'black',display: numGuests > 0 ? '' : 'none' }} onClick={clearingGuests}>
                  Clear
                </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Grid container justify='flex-end'>
            <Grid item xs={12}>
              <Typography style={{ color: '#008489', textAlign : 'right' }} onClick={saveButton}>
                Save
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Options;