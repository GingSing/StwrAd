import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT } from '../_actions/types';

let user = JSON.parse(localStorage.getItem('user'));
let signedIn = user ? true : false;
const initialState = {signingIn: false, signedIn: signedIn, userInfo: user};

export default function (state = initialState, action){
  switch(action.type){
    case SIGNIN_REQUEST:
      return {
        ...state,
        signingIn: true
      };
    case SIGNIN_SUCCESS:
      return{
        ...state,
        signingIn: false,
        signedIn: true,
        userInfo: action.user
      };
    case SIGNIN_FAILURE:
      return {};
    case SIGNOUT:
      return {};
    default:
      return state;
  }
}
