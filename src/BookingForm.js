import 'date-fns';
import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Options from './Options';

function BookingForm() {


  const [text, setText] = useState('Guests');
  const [clicked, setClicked] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Card style={{boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}}>
        <CardContent >
          <Grid container style={{ padding: 15 }}>
            <Grid item xs={12} >
              <Typography variant='h4' style={{ fontWeight: 700, paddingBottom: 30 }}>
                Book unique places to stay and things to do.
            </Typography>
              <Typography variant='subtitle2' style={{ fontWeight: 600, paddingBottom : 10 }}>
                WHERE
            </Typography>
              <TextField variant='outlined' placeholder='Anywhere' fullWidth />
              <div style={{ display: 'flex', padding : '30px 0px' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                  <KeyboardDatePicker
                    style={{ margin: 0}}
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
              <TextField variant='outlined' placeholder='Anywhere' fullWidth style={{paddingBottom : 30}}/>
              <div onClick={() => {
                setClicked(!clicked);
              }} style={{ border: '0.5px solid rgba(0, 0, 0, 0.39)', borderRadius: 4, MaxWidth: '100%', display: 'flex', padding: '15px' }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography style={{ color: 'rgba(0, 0, 0, 0.39)' }}>
                    Guests
                </Typography>
                </div>
                {clicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <Options showOptions={clicked} />
            </Grid>
            <Grid item xs={12} style={{paddingTop : 30}}>
              <Button size='large' variant='contained' 
              style={{fontSize : 18 , textTransform : 'none', color : 'white', backgroundColor : '#FF5A5F', padding : '10px 20px', fontWeight : 600, float : 'right'}}>
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