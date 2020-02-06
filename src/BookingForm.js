import 'date-fns';
import React, {useState} from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Guests from './Guests';

function BookingForm() {

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Card>
      <CardContent>
        <Grid container >
          <Grid item xs={12} style={{ padding: 15 }}>
            <Typography variant='h4' style={{fontWeight : 700}}>
              Book unique places to stay and things to do.
            </Typography>
            <Typography variant='subtitle1'>
              WHERE
            </Typography>
            <TextField variant='outlined' placeholder='Anywhere' fullWidth />
            <div style={{display : 'flex'}}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  style={{marginRight : 10}}
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="CHECK-IN"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }} />
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
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
            <TextField variant='outlined' placeholder='Anywhere' fullWidth />
            <Guests />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BookingForm;