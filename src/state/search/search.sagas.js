import { call, put, takeLatest } from 'redux-saga/effects';
import { ON_SEARCH } from '../../constants/actions/search';
import { fetchBeer } from '../../api/find-beer.api';
import { setBeer } from '../beer/beer.actions';

export function* attemptSearchSaga(action) {
    try{
        const beer = yield call(fetchBeer, action.payload);
        
        yield put(setBeer(beer))

    } catch(err) {}
}

export function* watchOnSearch() {
    yield takeLatest(ON_SEARCH, attemptSearchSaga);
}
