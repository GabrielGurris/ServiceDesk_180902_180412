import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import accountReducer from './reducers/accountReducer';
import incidentReducer from './reducers/incidentReducer';

const reducers = combineReducers({
    account: accountReducer,
    incident: incidentReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;