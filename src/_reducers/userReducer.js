import { REGISTER_ACCOUNT_FAILURE, REGISTER_ACCOUNT_REQUEST, REGISTER_ACCOUNT_SUCCESS } from '../_actions/types';

let initialState = {
    registeringAccount: false
}

export default function(state=initialState, action){
    switch(action.type){
        case REGISTER_ACCOUNT_REQUEST:
            return {
                ...state,
                registeringAccount: true
            }
        case REGISTER_ACCOUNT_SUCCESS:
            return {
                ...state,
                registeringAccount: false
            }
        case REGISTER_ACCOUNT_FAILURE:
            return {
                ...state,
                registeringAccount: false
            }
        default:
            return state;
    }
}