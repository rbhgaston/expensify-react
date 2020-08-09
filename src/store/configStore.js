import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default () => createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
    }),
    compose(applyMiddleware(thunk))
)
