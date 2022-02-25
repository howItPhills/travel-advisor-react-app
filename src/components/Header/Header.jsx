import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { Typography, AppBar, Toolbar, Box, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

//Typography - text element (h1-h6, title, subtitle); Box - div element;
//AppBar - header element; Toolbar - navigation bar;


const Header = () => {

   const classes = useStyles()

   return (
      <AppBar position='static'>
         <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
               Travel Advisor
            </Typography>
            <Box display='flex'>
               <Typography variant='h6' className={classes.title}>
                  Explore new places
               </Typography>
               {/* <Autocomplete> */}
               <div className={classes.search}>
                  <div className={classes.searchIcon}>
                     <SearchIcon />
                  </div>
                  <InputBase placeholder='Search...' classes={{ root: classes.input, input: classes.inputInput }} />
               </div>
               {/* </Autocomplete> */}
            </Box>
         </Toolbar>
      </AppBar>
   )
}

export default Header