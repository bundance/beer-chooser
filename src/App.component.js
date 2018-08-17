import React, { Fragment } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TopAppBar from './components/topAppBar/topAppBar.component';
import HeroUnit from './components/heroUnit/heroUnit.component';

import BeerList from './views/beerList/beerList.container';
import { POLISH_RED } from './config/config';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: POLISH_RED
      },
      common: {
        red: POLISH_RED
      }
  },
});

export const App = ({ beers }) => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <TopAppBar title="Help Jacek Choose a Beer"/>
      <HeroUnit />
      { !isEmpty(beers) && <BeerList /> }
    </MuiThemeProvider>
  </Fragment>
);
