import React from 'react';
import { Grid } from '@material-ui/core';
import img from './back.jpg'
import Navbar from './Navbar';
import BookingForm from './BookingForm';



function Main() {
  return (
    <Grid container style={{backgroundImage : `url(${img})`, backgroundPosition : 'center', backgroundSize : 'cover', height : '100vh'}}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={4}>
      <BookingForm />
      </Grid>
    </Grid>
  );
}

export default Main;
