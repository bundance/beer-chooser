import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as beerActions from '../../constants/actions/beer';

export default handleActions({
    [beerActions.SET_BEER]: setBeer
}, initialState);

function setBeer(state, action) {
    return {
        ...action.payload
    };
}
