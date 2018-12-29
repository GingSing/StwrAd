import { BRAND_INFO_REQUEST, BRAND_INFO_SUCCESS, BRAND_INFO_FAILURE, BRAND_AND_IMAGES_FAILURE, BRAND_AND_IMAGES_REQUEST, BRAND_AND_IMAGES_SUCCESS } from '../_actions/types';

let initialState = {
    topBrandsInfo: [],
    brandsInfo: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case BRAND_INFO_REQUEST:
            return{
                ...state,
                gettingTopBrandsInfo: true
            }
        case BRAND_INFO_SUCCESS:
            return{
                ...state,
                gettingTopBrandsInfo: false,
                topBrandsInfo: action.topBrandsInfo
            }
        case BRAND_INFO_FAILURE:
            return{
                ...state,
                gettingTopBrandsInfo: false
            }
        case BRAND_AND_IMAGES_REQUEST:
            return{
                ...state,
                gettingBrandAndImages: true
            }
        case BRAND_AND_IMAGES_SUCCESS:
            return{
                ...state,
                brandsInfo: action.brandsInfo,
                gettingBrandAndImages: false
            }
        case BRAND_AND_IMAGES_FAILURE:
            return{
                ...state,
                gettingBrandAndImages: false
            }
        default:
            return state;
    }
}