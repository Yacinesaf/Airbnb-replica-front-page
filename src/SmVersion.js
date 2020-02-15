import 'date-fns';
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, IconButton, Card,ClickAwayListener } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import img from './logo.png'
import imgBack from './back.jpg'
import box1 from './chris-yang-LA57RXF1mSI-unsplash.jpg'
import box2 from './clay-banks-hwLAI5lRhdM-unsplash.jpg'
import box3 from './jezael-melgoza-alY6_OpdwRQ-unsplash.jpg'
import Options from './Options';
import Autocomplete from '@material-ui/lab/Autocomplete';


function SmVersion({ open, mapboxAutocomplete }) {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState();
  const [checkout, setCheckout] = useState(new Date());
  const [checkin, setCheckin1] = useState(new Date());
  let [guests, setGuests] = useState(
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
    });

  const addingGuests = (element) => {
    setGuests((prevState) => {
      let copy = JSON.parse(JSON.stringify(prevState));
      copy[element].guest += 1
      return copy
    })
  }
  const removingGuests = (element) => {
    setGuests((prevState) => {
      let copy = JSON.parse(JSON.stringify(prevState));
      copy[element].guest -= 1
      return copy
    })
  }

  const clearingGuests = () => {
    setGuests((prevState) => {
      let copy = JSON.parse(JSON.stringify(prevState));
      copy.adults.guest = 0
      copy.children.guest = 0
      copy.infants.guest = 0
      return copy
    })
  }

  const changeCheckin = date => { setCheckin1(date) }
  const changeCheckout = date => { setCheckout(date) };

  const guestsSummary = () => {
    let sum = guests.adults.guest + guests.children.guest + guests.infants.guest
    return sum === 0 ? "Guests" : sum === 1 ? "1 guest" : sum + " guests"
  }

  const data = [
    {
      img: box1,
      text: 'Stays'
    },
    {
      img: box2,
      text: 'Experiences'
    },
    {
      img: box3,
      text: 'Adventures'
    },
  ]


  return (
    <Grid container style={{ display: xsOnly ? '' : 'none' }}>
      <Grid item xs={12}
        style={{ padding: 15, backgroundImage: `url(${imgBack})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 200 }}>
        <div style={{ flexGrow: 1, display: 'flex' }}>
          <img alt='yes' src={img} style={{ height: 30, width: 30 }} />
          <IconButton onClick={open} style={{ padding: 5 }}>
            <ExpandMoreIcon fontSize='small' style={{ color: 'white' }} />
          </IconButton>
        </div>
        <Typography variant='h6' style={{ color: 'white', fontWeight: 700, paddingTop: 'calc(200px - 115px)' }}>
          Book unique places to stay and things to do.
          </Typography>
      </Grid>
      <Grid item xs={12} style={{ padding: 15 }}>
        <Typography variant='caption' style={{ fontWeight: 600, paddingBottom: 10 }}>
          WHERE
            </Typography>
        <Autocomplete
          renderInput={params => (
            <TextField
              placeholder='Anywhere'
              onChange={(e) => {
                if (e.target.value) {
                  setIsLoading(true)
                  mapboxAutocomplete(e.target.value).then(response => {
                    setOptions(response.features ? response.features.map(x => x.place_name) : [])
                    setIsLoading(false)
                  })
                } else {
                  setOptions([])
                }
              }}
              {...params}
              style={{ backgroundColor: 'white', borderRadius: 4 }}
              variant='outlined'
              fullWidth />
          )}
          options={options}
          loading={isLoading}
        />
        <div style={{ display: 'flex', padding: '15px 0px' }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
              style={{ margin: 0 }}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker"
              label="CHECK-IN"
              value={checkin}
              onChange={changeCheckin}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }} />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              style={{ margin: 0, paddingLeft: 5 }}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="CHECKOUT"
              value={checkout}
              onChange={changeCheckout}
              KeyboardButtonProps={{
                'aria-label': 'change dates',
              }} />
          </MuiPickersUtilsProvider>
        </div>
        <ClickAwayListener onClickAway={() => { setClicked(false) }}>
          <div>
            <div id='guests' onClick={() => { setClicked(!clicked) }} style={{ border: '0.5px solid rgba(0, 0, 0, 0.39)', borderRadius: 4, MaxWidth: '100%', display: 'flex', padding: '15px' }}>
              <div style={{ flexGrow: 1 }}>
                <Typography id='typo' style={{ color: 'rgba(0, 0, 0, 0.39)' }}>
                  {guestsSummary()}
                </Typography>
              </div>
              {clicked ? <ExpandLessIcon id='expandLess' /> : <ExpandMoreIcon id='expandMore' />}
            </div>
            {clicked ?
              <Options
                guests={guests}
                removingGuests={removingGuests}
                addingGuests={addingGuests}
                clearingGuests={clearingGuests}
                saveButton={() => setClicked(false)}
              />
              : null}
          </div>
        </ClickAwayListener>
        <Button fullWidth size='large' variant='contained'
          style={{ fontSize: 12, textTransform: 'none', color: 'white', backgroundColor: '#FF5A5F', padding: '8px 18px', fontWeight: 600, marginTop: 15 }}>
          Search
        </Button>
      </Grid>
      <Grid item style={{ padding: 15 }}>
        <Typography variant='h6' style={{ fontWeight: 550 }}>
          Explore Airbnb
      </Typography>
        <div style={{ paddingTop: 5, display: 'flex' }}>
          {data.map((x, i) => (
            <Grid container key={i}>
              <Grid item style={{ paddingRight: 15 }}>
                <Card style={{ height: 100, width: 100, borderRadius: 12, boxShadow: '0 3px 3px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                  <div style={{ height: '65%', backgroundImage: `url(${x.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='caption' style={{ fontWeight: 700, padding: 7 }}>
                      {x.text}
                    </Typography>
                  </div>
                </Card>
              </Grid>
            </Grid>
          ))}
        </div>
      </Grid>
    </Grid>
  )
}

export default SmVersion;