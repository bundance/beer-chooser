import { call, takeLatest } from 'redux-saga/effects';
import { ON_SEARCH } from '../../constants/actions/search.actions';
import { fetchBeer } from '../../api/find-beer.api';


export function* attemptSearchSaga(action) {
    try{
        const beer = yield call(fetchBeer, 'blackberry');
        console.log({ beer });
    } catch(err) {}
}

export function* watchOnSearch() {
    yield takeLatest(ON_SEARCH, attemptSearchSaga);
}