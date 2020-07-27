import './styles/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore';
import {addExpense} from './actions/expenses'
// CSS
import 'react-dates/lib/css/_datepicker.css';

const store = configStore()
// STORE TESTING
store.dispatch(addExpense({description: 'pc', amount: 1000, createdAt: 20}))
store.dispatch(addExpense({description: 'ram for pc', amount: 100, createdAt:10}))
store.dispatch(addExpense({description: 'ssd', amount: 200, createdAt:30}))
// END

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))