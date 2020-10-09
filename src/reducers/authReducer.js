import { 
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_ERROR,
    SIGN_OUT_SUCCESSFUL,
    SIGN_OUT_ERROR
} from '../actions/actionTypes';

const INITIAL_STATE = {
    uid: null,
    email: null,
    authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN_SUCCESSFUL:
            console.log('Sign-In Success');
            return {
                ...state,
                uid: action.payload.uid,
                email: action.payload.email,
                authError: null
            }
        case SIGN_IN_ERROR:
            console.log('Sign-In Error');
            return {
                ...state,
                authError: 'Sign-In Error'
            }
        case SIGN_OUT_SUCCESSFUL:
            console.log('Sign-Out Success');
            return {
                ...state,
                uid: null,
                email: null,
            }
        case SIGN_OUT_ERROR:
            console.log('Sign-Out Error');
            return {
                ...state,
                authError: 'Sign-Out Error'
            }
        default:
            return state;
    }
}

export default authReducer;