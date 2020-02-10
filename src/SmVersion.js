import 'date-fns';
import React, { useState } from 'react';
import { Grid, OutlinedInput, Button, Typography, IconButton, Card } from '@material-ui/core';
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

function SmVersion({ open }) {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [text, setText] = useState('Guests');
  const [clicked, setClicked] = useState(false);
  let [numGuests, setNumGuests] = useState(null);

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [selectedDate1, setSelectedDate1] = React.useState(new Date());
  const handleDateChange1 = date => {
    setSelectedDate1(date);
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
  const notClicked = () => {
    if (clicked) setClicked(false);
  };

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
    <Grid container style={{display : xsOnly ? '' : 'none'}}>
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
        <OutlinedInput variant='outlined' placeholder='Anywhere' fullWidth />
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
              value={selectedDate1}
              onChange={handleDateChange1}
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
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }} />
          </MuiPickersUtilsProvider>
        </div>
        <div onClick={() => {
          setClicked(!clicked);
        }} style={{ border: '0.5px solid rgba(0, 0, 0, 0.39)', borderRadius: 4, MaxWidth: '100%', display: 'flex', padding: '15px', marginBottom: 15 }}>
          <div style={{ flexGrow: 1 }}>
            <Typography style={{ color: 'rgba(0, 0, 0, 0.39)' }}>
              {text}
            </Typography>
          </div>
          {clicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <Options clickedAway={notClicked} showOptions={clicked} textHandle={handleTextChange} addNum={addNumGuests} removeNum={removeNumGuests} />
        <Button fullWidth size='large' variant='contained'
          style={{ fontSize: 12, textTransform: 'none', color: 'white', backgroundColor: '#FF5A5F', padding: '8px 18px', fontWeight: 600 }}>
          Search
        </Button>
      </Grid>
      <Grid item style={{ padding: 15}}>
      <Typography variant='h6' style={{fontWeight : 550}}>
        Explore Airbnb
      </Typography>
        <div style={{paddingTop : 5, display: 'flex' }}>
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