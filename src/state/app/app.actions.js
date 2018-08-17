import { createAction } from 'redux-actions';
import { SET_LOADING_STATE } from '../../constants/actions/app';

export const setLoadingState = createAction(SET_LOADING_STATE);