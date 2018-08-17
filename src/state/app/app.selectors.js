import { createSelector } from 'reselect';
import * as appKeys from '../../constants/store-keys/app.store-keys';

export const selectLoadingState = state => state[appKeys.APP][appKeys.LOADING_STATE];
