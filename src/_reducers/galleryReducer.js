import { GALLERY_INFO_REQUEST, GALLERY_INFO_SUCCESS, GALLERY_INFO_FAILURE } from '../_actions/types';

const initialState = {
    imagesInfo:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case GALLERY_INFO_REQUEST:
            return{
                ...state,
                gettingGalleryInfo: true
            };
        case GALLERY_INFO_SUCCESS:
            return{
                ...state,
                gettingGalleryInfo: false,
                imagesInfo: action.imagesInfo
            };
        case GALLERY_INFO_FAILURE:
            return{
                ...state,
                gettingGalleryInfo: false
            }
        default:
            return state;
    }
}