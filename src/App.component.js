import React, { Fragment } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import './App.css';
import Search from './views/search/search.container';
import BeerList from './views/beerList/beerList.container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
      <Search />
      { !isEmpty(beers) && <BeerList /> }
    </MuiThemeProvider>
  </Fragment>
);
