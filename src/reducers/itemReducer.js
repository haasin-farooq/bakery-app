import { ADD_ITEM, GET_ITEMS } from '../actions/actionTypes';

const INITIAL_STATE = {
    items: []
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return state;
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default itemReducer;