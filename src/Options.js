import React, { useState } from 'react'
import { Typography, IconButton, Card } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Options({ showOptions, textHandle, addNum, removeNum, guests, addingGuests, removingGuests }) {

  const theme = useTheme();
  const mdOnly = useMediaQuery(theme.breakpoints.only('md'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

 let objs = guests;
  let obj = {
    adults: {
      type: 'Adults',
      sub: '',
      guest: 0,
    },
    children: {
      type: 'Children',
      sub: 'Ages 2-12',
      guest: 0
    },
    infants: {
      type: 'Infants',
      sub: 'Under 2',
      guest: 0,
    }
  }
  let objKeys = Object.keys(obj)

  return (
    <div style={{width: mdOnly ? '64%' : '20%'}}>
      <Card style={{ padding: '5px 15px', width: xsOnly ? '84%' : '20%', position: 'absolute', display: showOptions ? '' : 'none', zIndex: 10, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', borderRadius: 2 }}>
        {objKeys.map((x, i) => (
          <div key={i} style={{ display: 'flex', margin: '15px 0px' }}>
            <div style={{ flexGrow: 1, alignItems: 'center' }}>
              <Typography variant='h6'>
                {obj[x].type}
              </Typography>
              <Typography variant='subtitle2'>
                {obj[x].sub}
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton disabled={obj[x].guest === 0 ? true : false} onClick={() => {
                removeNum();
                textHandle();
                removingGuests(x);
              }}>
                <RemoveCircleOutlineIcon fontSize='large' style={{ color: obj[x].guest === 0 ? '' : '#008489' }} />
              </IconButton>
              <Typography variant='body2' style={{ padding: '0px 10px' }}>
                {`${obj[x].guest}+`}
              </Typography>
              <IconButton onClick={() => {
                addNum();
                textHandle();
                addingGuests(x);
              }}>
                <AddCircleOutlineIcon fontSize='large' style={{ color: '#008489' }} />
              </IconButton>

            </div>
          </div>
        ))}
        <div style={{ textAlign: 'right' }}>
          <Typography style={{ color: '#008489' }}>
            Save
        </Typography>
        </div>
      </Card>
    </div>
  )
}

export default Options;