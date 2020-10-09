import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signInWithGoogle } from '../../actions/authAction';

import './sign-in.styles.scss';

const SignIn = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.firebase.auth);

    if(state.uid) {
        return <Redirect to='/' />
    }

    return (
        <div className="container card-container">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Welcome!</span>
                </div>
                <div className="card-action">
                    <button className="waves-effect red darken-2 btn" onClick={() => dispatch(signInWithGoogle())}>
                        <i className="fab fa-google"></i> Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;