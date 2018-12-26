import { GALLERY_INFO_REQUEST, GALLERY_INFO_SUCCESS, GALLERY_INFO_FAILURE } from './types';
import { galleryService } from '../_services';

export function getProductsForGallery(){
    return dispatch => {
        dispatch(request());
        galleryService.getProductsForGallery()
            .then(imagesInfo => dispatch(success(imagesInfo)))
            .catch(err => dispatch(failure(err)));
    }

    function request(){return {type:GALLERY_INFO_REQUEST}}
    function success(imagesInfo){return {type:GALLERY_INFO_SUCCESS, imagesInfo}}
    function failure(err){return {type:GALLERY_INFO_FAILURE, err}}
}