import 'date-fns';
import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Options from './Options';

function BookingForm({ clicked, clickEvent, mapboxAutocomplete }) {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState();
  const [text, setText] = useState('Guests');
  let [numGuests, setNumGuests] = useState(null);
  let [autocompleteValue, setAutocompleteValue] = useState(null);

  const [checkout, setCheckout] = useState(new Date());
  const changeCheckout = date => {
    setCheckout(date);
  };

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
    })}
  const removingGuests = (element) => {
    setGuests((prevState) => {
      let copy = JSON.parse(JSON.stringify(prevState));
      copy[element].guest -= 1
    })}


  const [checkin, setCheckin1] = useState(new Date());
  const changeCheckin = date => {
    setCheckin1(date);
  };

  const handleTextChange = () => {
    if (numGuests === 1) {
      setText(`${numGuests} guest`)
    } else if (numGuests > 1) {
      setText(`${numGuests} guests`)
    } else if (numGuests === 0) {
      setText('Guests')
    }
  }
  const addNumGuests = () => {
    setNumGuests(numGuests += 1)
  };
  const removeNumGuests = () => {
    setNumGuests(numGuests -= 1)
  };

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
              <div id='guests' onClick={clickEvent} style={{ border: '0.5px solid rgba(0, 0, 0, 0.39)', borderRadius: 4, MaxWidth: '100%', display: 'flex', padding: '15px' }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography id='typo' style={{ color: 'rgba(0, 0, 0, 0.39)' }}>
                    {text}
                  </Typography>
                </div>
                {clicked ? <ExpandLessIcon id='less' /> : <ExpandMoreIcon id='more' />}
              </div>
              {clicked? 
              <Options 
              clicked={clicked} 
              showOptions={clicked} 
              textHandle={handleTextChange} 
              addNum={addNumGuests} 
              removeNum={removeNumGuests} 
              guests={guests}
              removingGuests={removingGuests}
              addingGuests={addingGuests}
              />
               : null  }
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 15 }}>
              <Button size='large' variant='contained'
                onClick={() => {
                  const searchObject = {
                    city: autocompleteValue,
                    checkin: `${checkin.getDate()}/${checkin.getMonth() + 1}/${checkin.getFullYear()}`,
                    checkout: `${checkout.getDate()}/${checkout.getMonth() + 1}/${checkout.getFullYear()}`,
                    guests: {
                      adults: 0,
                      children: 0,
                      infants: 0
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