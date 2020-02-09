import React, { useState } from 'react'
import { Typography, IconButton, Card } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function Options({ showOptions, textHandle, addNum, removeNum }) {

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
    <Card style={{ padding: '5px 15px', width: '19%', position: 'absolute', display: showOptions ? '' : 'none', zIndex: 10, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
      {objKeys.map((x, i) => (
        <div key={i} style={{ display: 'flex', margin: '15px 0px' }}>
          <div style={{ flexGrow: 1, alignItems: 'center'}}>
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
              <AddCircleOutlineIcon fontSize='large' style={{ color: '#008489' }}/>
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
  )
}

export default Options;

// let [numGuestAdult, setNumGuestAdult] = useState(0);
//   let [numGuestChil, setNumGuestChil] = useState(0);
//   let [numGuestIn, setNumGuestIn] = useState(0);

// <div style={{ display: 'flex', margin : '15px 0px' }}>
//         <div style={{ flexGrow: 1, alignItems: 'center', display: 'flex' }}>
//           <Typography variant='h6'>
//             Adults
//               </Typography>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton style={{padding : '10px 0px'}} disabled={numGuestAdult === 0 ? true : false} onClick={() => {
//             setNumGuestAdult(numGuestAdult -= 1)
//           }}>
//             <RemoveCircleOutlineIcon style={{color: numGuestAdult === 0 ? '' : 'green'}} />
//           </IconButton>
//           <Typography variant='body2' style={{ padding: '0px 10px' }}>
//             {`${numGuestAdult}+`}
//           </Typography>
//           <AddCircleOutlineIcon style={{color: 'green'}} onClick={() => {
//             setNumGuestAdult(numGuestAdult += 1)
//           }} />
//         </div>
//        </div>
//       <div style={{ display: 'flex', margin : '15px 0px' }}>
//         <div style={{ flexGrow: 1, alignItems: 'center' }}>
//           <Typography variant='h6'>
//             Children
//               </Typography>
//           <Typography variant='subtitle2'>
//             Ages 2-12
//               </Typography>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton style={{padding : '10px 0px'}} disabled={numGuestChil === 0 ? true : false} onClick={() => {
//             setNumGuestChil(numGuestChil -= 1)
//           }}>
//             <RemoveCircleOutlineIcon style={{color: numGuestChil === 0 ? '' : 'green'}} />
//           </IconButton>
//           <Typography variant='body2' style={{ padding: '0px 10px' }}>
//             {`${numGuestChil}+`}
//           </Typography>
//           <AddCircleOutlineIcon 
//           style={{color: 'green'}}
//           onClick={() => {
//             setNumGuestChil(numGuestChil += 1)
//           }} />
//         </div>
//       </div>
//       <div style={{ display: 'flex', margin : '10px 0px' }}>
//         <div style={{ flexGrow: 1 }}>
//           <Typography variant='h6'>
//             Infants
//               </Typography>
//           <Typography variant='subtitle2'>
//             Under 2
//           </Typography>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton style={{padding : '10px 0px'}} disabled={numGuestIn === 0 ? true : false} onClick={() => {
//             setNumGuestIn(numGuestIn--)
//           }}>
//             <RemoveCircleOutlineIcon style={{color: numGuestIn === 0 ? '' : 'green'}} />
//           </IconButton>
//           <Typography variant='body2' style={{ padding: '0px 10px' }}>
//             {`${numGuestIn}+`}
//           </Typography>
//             <AddCircleOutlineIcon style={{color: 'green'}} onClick={() => {
//               setNumGuestIn(numGuestIn++)
//             }} />
//         </div>
//       </div>