import { 
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_ERROR,
    SIGN_OUT_SUCCESSFUL,
    SIGN_OUT_ERROR
} from '../actions/actionTypes';

const INITIAL_STATE = {
    authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN_SUCCESSFUL:
            console.log('Sign-In Success');
            return {
                ...state,
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
            return state;
        case SIGN_OUT_ERROR:
            console.log('Sign-Out Error');
            return state;
        default:
            return state;
    }
}

export default authReducer;