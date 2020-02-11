import React, { useState } from 'react'
import { Typography, IconButton, Card, ClickAwayListener } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Options({ showOptions, textHandle, addNum, removeNum }) {

  const theme = useTheme();
  const mdOnly = useMediaQuery(theme.breakpoints.only('md'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [guests, setGuests] = useState(
    {
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
    })
  let objKeys = Object.keys(guests)


  return (
    <div style={{width: mdOnly ? '64%' : '20%'}}>
      <Card style={{ padding: '5px 15px', width: xsOnly ? '84%' : '20%', position: 'absolute', display: showOptions ? '' : 'none', zIndex: 10, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', borderRadius: 2 }}>
        {objKeys.map((x, i) => (
          <div key={i} style={{ display: 'flex', margin: '15px 0px' }}>
            <div style={{ flexGrow: 1, alignItems: 'center' }}>
              <Typography variant='h6'>
                {guests[x].type}
              </Typography>
              <Typography variant='subtitle2'>
                {guests[x].sub}
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton disabled={guests[x].guest === 0 ? true : false} onClick={() => {
                removeNum();
                textHandle();
                setGuests((prevState) => {
                  let copy = JSON.parse(JSON.stringify(prevState))
                  copy[x].guest -= 1
                  return copy
                })
              }}>
                <RemoveCircleOutlineIcon fontSize='large' style={{ color: guests[x].guest === 0 ? '' : '#008489' }} />
              </IconButton>
              <Typography variant='body2' style={{ padding: '0px 10px' }}>
                {`${guests[x].guest}+`}
              </Typography>
              <IconButton onClick={() => {
                addNum();
                textHandle();
                setGuests((prevState) => {
                  let copy = JSON.parse(JSON.stringify(prevState))
                  copy[x].guest += 1
                  return copy
                })
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