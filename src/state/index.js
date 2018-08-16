import { combineReducers } from "redux";
import beer from './beer/beer.reducers';

const appReducer = combineReducers({
    beer
});

export default (state, action) => {
    return appReducer(state, action)
}
