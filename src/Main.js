import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import img from './back.jpg'
import Navbar from './Navbar';
import BookingForm from './BookingForm';
import DialogDrop from './DialogDrop';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SmVersion from './SmVersion'

function Main() {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [isOpen, setIsOpen] = useState(false);

  const OpenDialog = () => {
    setIsOpen(true);
  };

  const CloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
    <Grid container alignContent='flex-start' 
    style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', width: '100%', display : xsOnly ? 'none' : '' }}>
      <Grid item xs={12} style={{ maxHeight: 84 }}>
        <Navbar open={OpenDialog} />
      </Grid>
      <Grid item xs={12}>
        <DialogDrop close={CloseDialog} isOpen={isOpen} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} style={{ paddingTop: 10, marginLeft: 100, marginTop: 30 }}>
            <BookingForm />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container style={{paddingTop : 'calc(100vh - 612.4px)'}}>
          <Grid item xs={12} style={{padding : 20}}>
            <Typography variant='subtitle2' style={{ color: 'white', textAlign : 'right' }} >
              Over 300 unique places
            </Typography>
            <Typography variant='subtitle2' style={{ color: 'white', textAlign : 'right' }} >
              to stay in Kyoto
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <SmVersion open={OpenDialog} />
    </div>
  );
}

export default Main;
