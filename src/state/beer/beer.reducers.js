import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as beerActions from '../../constants/actions/beer';
import * as beerKeys from '../../constants/store-keys/beer.store-keys';

export default handleActions({
    [beerActions.SET_BEER]: setBeer
}, initialState);

function setBeer(state, action) {
    return {
        ...state,
        ...Object.assign({}, state[beerKeys.BEER], action.payload)
    };
}
