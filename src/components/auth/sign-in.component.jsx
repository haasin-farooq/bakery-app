import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import { signInWithGoogle, auth } from '../../firebase/firebaseConfig';

import './sign-in.styles.scss';

const SignIn = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);

            console.log(user);
        });
    }, [currentUser]);

    console.log(auth.uid);

    if(currentUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="container card-container">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Welcome!</span>
                </div>
                <div className="card-action">
                    <button className="waves-effect red darken-2 btn" onClick={signInWithGoogle}>
                        <i className="fab fa-google"></i> Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;