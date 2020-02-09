import React from 'react';
import { Grid } from '@material-ui/core';
import img from './back.jpg'
import Navbar from './Navbar';
import BookingForm from './BookingForm';



function Main() {
  return (
    <Grid onClick={(e)=>{console.dir(e.target)}} container alignContent='flex-start' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh' }}>
      <Grid item xs={12} style={{maxHeight : 84}}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} style={{paddingTop : 10, marginLeft : 100, marginTop : 50}}>
            <BookingForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
