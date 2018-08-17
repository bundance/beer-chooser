import { handleActions } from 'redux-actions';
import initialState from './initial-state';
import * as appActions from '../../constants/actions/app';
import * as appKeys from '../../constants/store-keys/app.store-keys';

export default handleActions({
    [appActions.SET_LOADING_STATE]: setLoadingState
}, initialState);

function setLoadingState(state, action) {
    return {
        ...state,
        [appKeys.LOADING_STATE]: action.payload
    };
}
