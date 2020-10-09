import authReducer from './authReducer';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
import summaryReducer from './summaryReducer';

import { firestoreReducer } from 'redux-firestore'; // Pre-made reducer for syncing our firestore data with our state in the background  
import { firebaseReducer } from 'react-redux-firebase'; // Pre-made reducer for syncing the authentication state with our redux store
import { reducer as formReducer } from "redux-form";

import { combineReducers } from 'redux';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
    cart: cartReducer,
    summary: summaryReducer,
    view: viewReducer,
    form: formReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;