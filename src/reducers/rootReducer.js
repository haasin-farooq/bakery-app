import authReducer from './authReducer';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
import summaryReducer from './summaryReducer';

import { firestoreReducer } from 'redux-firestore'; // Pre-made reducer for syncing our firestore data with our state in the background  
import { firebaseReducer } from 'react-redux-firebase'; // Pre-made reducer for syncing the authentication state with our redux store

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
    cart: cartReducer,
    summary: summaryReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;