import * as sagas from './search.sagas';
import { setLoadingState } from '../app/app.actions';
import { ERROR, LOADING, SUCCESS } from '../../constants/store-keys/app.store-keys';
import { call, put } from 'redux-saga/effects';
import { fetchBeer } from '../../api/fetch-beer.api';
import { setBeer } from '../beer/beer.actions';

describe('beer sagas tests', () => {
    it('should fetch the beer and put it in the store', () => {
        const action = { payload: 'fish' }
        const gen = sagas.attemptSearchSaga(action);
        
        expect(gen.next().value).toEqual(put(setLoadingState(LOADING)));
        expect(gen.next().value).toEqual(call(fetchBeer, action.payload));
        expect(gen.next('beer').value).toEqual(put(setBeer('beer')));
        expect(gen.next().value).toEqual(put(setLoadingState(SUCCESS)));
        expect(gen.next().done).toEqual(true);
    });

    it('should set the loadingState to error when an error is caught', () => {
        let action = undefined;
        const gen = sagas.attemptSearchSaga(action);
        
        expect(gen.next().value).toEqual(put(setLoadingState(LOADING)));
        expect(gen.next().value).toEqual(put(setLoadingState(ERROR)));
        expect(gen.next().done).toEqual(true);
    })
});
