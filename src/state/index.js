import { combineReducers } from "redux";
import app from './app/app.reducers';
import beer from './beer/beer.reducers';

const appReducer = combineReducers({
    app,
    beer
});

export default (state, action) => {
    return appReducer(state, action)
}
