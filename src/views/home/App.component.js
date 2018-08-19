import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TopAppBar from '../../components/topAppBar/topAppBar.component';
import HeroUnit from '../../components/heroUnit/heroUnit.component';
import BeerList from '../../components/beerList/beerList.container';
import { POLISH_RED } from '../../config/config';

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

export const App = ({ beers, loadingState }) => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <TopAppBar title="Help Jacek Choose a Beer"/>
      <HeroUnit loadingState={loadingState} />
      { beers && beers.length ? <BeerList /> : undefined }
    </MuiThemeProvider>
  </Fragment>
);

App.propTypes = {
  beers: PropTypes.array.isRequired,
};
