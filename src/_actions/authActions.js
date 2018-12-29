import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT } from './types';
import { authService } from '../_services';

export function signIn(username, password){
    return dispatch => {
      dispatch(request(username));
      authService.signIn(username, password)
        .then(
          user => {
            dispatch(success(user));
          }
        ).catch(err => {
          dispatch(failure(err));
        });
    }
  
    function request(user) { return { type: SIGNIN_REQUEST, user }}
    function success(user) { return { type: SIGNIN_SUCCESS, user }}
    function failure(error) { return { type: SIGNIN_FAILURE, error }}
  }

export function signOut(){
  return dispatch =>{
    authService.signOut();
    dispatch({type: SIGNOUT});
  }
}