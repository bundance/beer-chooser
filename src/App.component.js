import React, { Fragment } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import './App.css';
import Search from './views/search/search.container';
import BeerList from './views/beerList/beerList.container';

export const App = ({ beers }) => (
  <Fragment>
    <Search />
    { !isEmpty(beers) && <BeerList /> }
  </Fragment>
);
