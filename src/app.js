import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import configStore from './store/configStore';
import {firebase} from './firebase/firebase'
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth'
// CSS
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import {render} from 'enzyme';

console.log('click on this to check if the source maps are working')

// redux store
const store = configStore()

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses())
            .then(() => {
                renderApp()
                if(history.location.pathname === '/')
                    history.push('/dashboard')
            })
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})


