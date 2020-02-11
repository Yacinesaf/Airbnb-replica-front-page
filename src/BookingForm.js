import 'date-fns';
import React, { useState } from 'react';
import { Grid, TextField , Button, Card, CardContent, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Options from './Options';

function BookingForm({clicked, clickEvent, mapboxAutocomplete}) {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState();
  const [text, setText] = useState('Guests');
  let [numGuests, setNumGuests] =useState(null);

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [selectedDate1, setSelectedDate1] = React.useState(new Date());
  const handleDateChange1 = date => {
    setSelectedDate1(date);
  };

  const handleTextChange = () => {
    if(numGuests === 1) {
      setText(`${numGuests} guest`)
    } else if(numGuests > 1) {
      setText(`${numGuests} guests`)
    }else if(numGuests === 0) {
      setText('Guests')
    }
  }
  const addNumGuests = () => {
    setNumGuests(numGuests+=1)
  };
  const removeNumGuests = () => {
    setNumGuests(numGuests-=1)
  };

  return (
    <div>
      <Card style={{boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width : 400}}>
        <CardContent >
          <Grid container style={{ padding: '15px 15px 0px' }}>
            <Grid item xs={12} >
              <Typography variant='h5' style={{ fontWeight: 750, paddingBottom: 15 }}>
                Book unique places to stay and things to do.
            </Typography>
              <Typography variant='caption' style={{ fontWeight: 600, paddingBottom : 10 }}>
                WHERE
            </Typography>
            <Autocomplete
                  renderInput={params => (
                    <TextField
                    onClick={(e)=>{console.log(e.target)}}
                    placeholder='Anywhere'
                    onChange={(e) => {
                      if(e.target.value) {
                        setIsLoading(true)
                        console.log(e.target.value)
                        mapboxAutocomplete(e.target.value).then(response => {
                        console.log(response)
                        setOptions(response.features ? response.features.map(x => x.place_name) : [])
                        setIsLoading(false)
                        })
                    } else {
                      setOptions([])
                    }
                    console.log(e.target.textContent)
                    }} 
                    {...params}
                    style={{backgroundColor : 'white', borderRadius : 4}}
                    variant='outlined' 
                    fullWidth />
                  )}
                  options={options}
                />
              <div style={{ display: 'flex', padding : '15px 0px' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                  <KeyboardDatePicker
                    style={{ margin: 0}}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker"
                    label="CHECK-IN"
                    value={selectedDate1}
                    onChange={handleDateChange1}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }} />
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{ margin: 0, paddingLeft : 5 }}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="CHECKOUT"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
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
              <Options clicked={clicked} showOptions={clicked} textHandle={handleTextChange} addNum={addNumGuests} removeNum={removeNumGuests} />
            </Grid>
            <Grid item xs={12} style={{paddingTop : 15}}>
              <Button size='large' variant='contained' 
              style={{fontSize : 16 , textTransform : 'none', color : 'white', backgroundColor : '#FF5A5F', padding : '8px 18px', fontWeight : 600, float : 'right'}}>
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