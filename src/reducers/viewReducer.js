import { 
    CHANGE_VIEW
} from '../actions/actionTypes';

const INITIAL_STATE = {
    clientView: true
}

const viewReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                clientView: !state.clientView
            }
        default:
            return state;
    }
}

export default viewReducer;