import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import Header from '../components/Header';

export const PrivateRoute = (props) => {
    return (
        props.isAuthenticated ?
            <>
                <Header />
                <Route {...props} />
            </>
             : <Redirect to="/" />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PrivateRoute)