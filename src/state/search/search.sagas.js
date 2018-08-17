import { call, put, takeLatest } from 'redux-saga/effects';
import { ON_SEARCH } from '../../constants/actions/search';
import { setLoadingState } from '../app/app.actions';
import { LOADING, SUCCESS } from '../../constants/store-keys/app.store-keys';
import { fetchBeer } from '../../api/find-beer.api';
import { setBeer } from '../beer/beer.actions';

export function* attemptSearchSaga(action) {
    try{
        yield put(setLoadingState(LOADING));

        const beer = yield call(fetchBeer, action.payload);
        yield put(setBeer(beer));
        
        yield put(setLoadingState(SUCCESS));
    } catch(err) {
        yield put(setLoadingState(SUCCESS));
    }
}

export function* watchOnSearch() {
    yield takeLatest(ON_SEARCH, attemptSearchSaga);
}
