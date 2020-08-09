import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore';
import './firebase/firebase'
// CSS
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

// configure redux store
const store = configStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
console.log('testing for source map in prod env')
ReactDOM.render(jsx, document.getElementById('root'))