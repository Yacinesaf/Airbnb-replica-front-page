import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import img from './back.jpg'
import Navbar from './Navbar';
import BookingForm from './BookingForm';
import DialogDrop from './DialogDrop';



function Main() {

  const [isOpen, setIsOpen] = useState(false);

  const OpenDialog = () => {
    setIsOpen(true);
  };

  const CloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <Grid container alignContent='flex-start' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh' }}>
      <Grid item xs={12} style={{ maxHeight: 84 }}>
        <Navbar open={OpenDialog}/>
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
    </Grid>
  );
}

export default Main;
