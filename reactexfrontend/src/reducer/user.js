import * as types from '../types';

const initialState = {
    user: null,
};

function user(state = initialState, action) {
    switch(action.type) {
        case types.SUCCESS_TO_LOGIN:
            return { ...state, user: action.userData }
        default:
            return state;
    }
}

export default user;