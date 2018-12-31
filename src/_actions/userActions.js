import { REGISTER_ACCOUNT_REQUEST, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT_FAILURE } from './types';
import { userService } from '../_services';

export function registerAccount(username, name, email, password, confirmPassword){
    return dispatch => {
        dispatch(request());
        userService.registerAccount(username, name, email, password, confirmPassword)
            .then(() => {
                dispatch(success());
            })
            .catch(err => dispatch(failure(err)));
    }

    function request(){ return { type: REGISTER_ACCOUNT_REQUEST }}
    function success(){ return { type: REGISTER_ACCOUNT_SUCCESS }}
    function failure(err){ return { type: REGISTER_ACCOUNT_FAILURE, err }}
}