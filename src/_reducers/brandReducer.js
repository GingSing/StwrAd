import { BRAND_INFO_REQUEST, BRAND_INFO_SUCCESS, BRAND_INFO_FAILURE } from '../_actions/types';

let initialState = {
    companyInfo: []
}

export default function(state=initialState, action){
    switch(action.type){
        case BRAND_INFO_REQUEST:
            return{
                ...state,
                gettingCompanyInfo: true
            }
        case BRAND_INFO_SUCCESS:
            return{
                ...state,
                gettingCompanyInfo: false,
                companyInfo: action.companyInfo
            }
        case BRAND_INFO_FAILURE:
            return{
                ...state,
                gettingCompanyInfo: false
            }
        default:
            return state;
    }
}