import { createSelector } from 'reselect';
import * as beerKeys from '../../constants/store-keys/beer.store-keys';

export const selectBeer = state => state[beerKeys.BEER];
export const getBeers = createSelector(
    [selectBeer],
    beers => beers && Object.values(beers)
);
