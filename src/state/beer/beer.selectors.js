import { createSelector } from 'reselect';
import * as beerKeys from '../../constants/store-keys/beer.store-keys';

export const selectBeers = state => state[beerKeys.BEER];
export const getBeers = createSelector(
    [selectBeers],
    beers => {
        console.log('tytpeof beers:', typeof beers);
        console.log({ beers });
        return beers && Object.values(beers)
    }
)