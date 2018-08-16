import { takeLatest } from 'redux-saga/effects';
import { ON_SEARCH } from '../../constants/actions/search.actions';

export function* attemptSearchSaga(action) {
    try{
        console.log({ action });
    } catch(err) {}
}

export function* watchOnSearch() {
    yield takeLatest(ON_SEARCH, attemptSearchSaga);
}