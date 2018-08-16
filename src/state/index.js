import { combineReducers } from "redux";
//import search from './search/search.reducers';

const appReducer = combineReducers({
    // app,
    // data
});

export default (state, action) => {
    return appReducer(state, action)
}
