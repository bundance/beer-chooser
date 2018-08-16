
import { all, fork } from "redux-saga/effects";
import { watchOnSearch } from './search/search.sagas';

export default function* root() {
    yield all([
        fork(watchOnSearch)
    ])
};
