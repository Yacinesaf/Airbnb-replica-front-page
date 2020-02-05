import React from 'react';
import { Grid } from '@material-ui/core';
import img from './back.jpg'
import Navbar from './Navbar';



function Main() {
  return (
    <Grid container style={{backgroundImage : `url(${img})`, backgroundPosition : 'center', backgroundSize : 'cover', height : '100vh'}}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
    </Grid>
  );
}

export default Main;
