import 'date-fns';
import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, ClickAwayListener } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Options from './Options';

function BookingForm({ mapboxAutocomplete }) {
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState();
  const [checkout, setCheckout] = useState(new Date());
  const [checkin, setCheckin1] = useState(new Date());
  let [autocompleteValue, setAutocompleteValue] = useState(null);
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

  const clearingGuests =() => {
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

  return (
    <div>
      <Card style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: 400 }}>
        <CardContent >
          <Grid container style={{ padding: '15px 15px 0px' }}>
            <Grid item xs={12} >
              <Typography variant='h5' style={{ fontWeight: 750, paddingBottom: 15 }}>
                Book unique places to stay and things to do.
            </Typography>
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
                onChange={(event, value) => setAutocompleteValue(value)}
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
                      saveButton={()=> setClicked(false)}
                    />
                    : null}
                </div>
              </ClickAwayListener>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 15 }}>
              <Button size='large' variant='contained'
                onClick={() => {
                  const searchObject = {
                    city: autocompleteValue,
                    checkin: `${checkin.getDate()}/${checkin.getMonth() + 1}/${checkin.getFullYear()}`,
                    checkout: `${checkout.getDate()}/${checkout.getMonth() + 1}/${checkout.getFullYear()}`,
                    guests: {
                      adults: guests.adults.guest,
                      children: guests.children.guest,
                      infants: guests.infants.guest
                    }
                  }
                  console.log(searchObject)
                }}
                style={{ fontSize: 16, textTransform: 'none', color: 'white', backgroundColor: '#FF5A5F', padding: '8px 18px', fontWeight: 600, float: 'right' }}>
                Search
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default BookingForm;