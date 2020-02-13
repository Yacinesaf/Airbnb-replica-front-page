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

  const mapboxAutocomplete = (str) => {
    let mapbox_options = {
      apiKey: 'pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrNW4yeXR1ZjE2NGszanBsZndhbnVkaGEifQ.I3SHntsPRBpIGUJcrQwZUA',
      types: 'place',
      limit: '5'
    }
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
      str + '.json?access_token=' + mapbox_options.apiKey +
      '&autocomplete=true&types=' + mapbox_options.types + '&limit=' + mapbox_options.limit;

    return fetch(url).then(res => {
      return res.json().then(real => {
        return real
      })
    })
  }

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const invertClick = () => {
    setClicked(!clicked)
  }

  const OpenDialog = () => {
    setIsOpen(true);
  };

  const CloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div onClick={(e) => {
      if ((e.target.id === 'guests' || e.target.id === 'less' || e.target.id === 'more' || e.target.id === 'typo') && !clicked) {
        setClicked(true)
      } else {
        setClicked(false)
      }
    }}>
      <Grid container alignContent='flex-start'
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', width: '100%', display: xsOnly ? 'none' : '' }}>
        <Grid item xs={12} style={{ maxHeight: 84 }}>
          <Navbar open={OpenDialog} />
        </Grid>
        <Grid item xs={12}>
          <DialogDrop close={CloseDialog} isOpen={isOpen} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} style={{ paddingTop: 10, marginLeft: 100, marginTop: 30 }}>
              <BookingForm mapboxAutocomplete={mapboxAutocomplete} clicked={clicked} clickEvent={invertClick} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container style={{ paddingTop: 'calc(100vh - 612.4px)' }}>
            <Grid item xs={12} style={{ padding: 20 }}>
              <Typography variant='subtitle2' style={{ color: 'white', textAlign: 'right' }} >
                Over 300 unique places
            </Typography>
              <Typography variant='subtitle2' style={{ color: 'white', textAlign: 'right' }} >
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
