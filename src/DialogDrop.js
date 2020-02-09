import React from 'react'
import { Dialog, Typography, Grid, IconButton, Slide, DialogContent, Divider, List, ListItem, DialogTitle, ListItemText } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import img from './logoRed.png'
import LanguageIcon from '@material-ui/icons/Language';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


function DialogDrop({ open, close, isOpen }) {

  let list = ['Downlaod the App', 'Invite friends', 'Refer hosts', 'Airbnb for Work']
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog fullScreen onClose={close} open={isOpen} TransitionComponent={Transition}>
        <DialogTitle style={{ display: 'flex', padding: '25px 39px 0px', alignItems: 'center' }}>
          <div onClick={close}>
            <img alt='yes' src={img} style={{ height: 35, width: 35 }} />
            <IconButton>
              <ExpandLessIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} style={{ padding: 15 }}>
              <Typography variant='body1' style={{ paddingTop: 30 }}>
                Home
              </Typography>
              <Divider style={{ marginTop: 20 }} />
              <List style={{ paddingTop: 20, paddingBottom: 20 }}>
                {list.map((x, i) => (
                  <ListItem key={i} style={{ padding: '5px 0px' }} >
                    <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                      {x}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <div style={{ display: 'flex', alignItems: 'center', paddingTop: 20 }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant='body1'>
                    Language
                  </Typography>
                  <Typography variant='caption' style={{ display: 'block' }} >
                    English (CA)
                </Typography>
                </div>
                <LanguageIcon fontSize='large' />
              </div>
              <div style={{ paddingTop: 10, paddingBottom: 20 }}>
                <Typography variant='body1'>
                  Currency
                </Typography>
                <Typography variant='caption' style={{ display: 'block' }}>
                  $ CAD
                </Typography>
              </div>
              <Divider />
              <div style={{ display: 'flex', alignItems: 'center', paddingTop: 20 }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant='body1'>
                    List yout place
                  </Typography>
                  <div style={{ display: 'flex' }}>
                    <Typography variant='caption'>
                      Earn up to
                  </Typography>
                    <Typography variant='caption' style={{ fontWeight: 600, paddingLeft: 5 }}>
                      $1,335 CAD a month
                  </Typography>
                  </div>
                </div>
                <HomeRoundedIcon fontSize='large' />
              </div>
              <Typography variant='body1' style={{ paddingTop: 20 }}>
                Learn about hosting your home
              </Typography>
              <Typography variant='body1' style={{ paddingTop: 20 }}>
                No time to host?
              </Typography>
              <div>
                <Typography variant='body1' style={{ paddingTop: 20 }}>
                  Host an experience
                </Typography>
                <Typography variant='caption'>
                  Earn money doing what you love
              </Typography>
              </div>
              <Divider style={{ margin: '20px 0px' }} />
              <div style={{ paddingBottom: 40 }}>
                <Typography variant='body1'>Help</Typography>
                <Typography variant='body1' style={{ paddingTop: 20 }} >Sign up</Typography>
                <Typography variant='body1' style={{ paddingTop: 20 }} >Log in</Typography>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div >

  )

}

export default DialogDrop;