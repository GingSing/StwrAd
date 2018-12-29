import { BRAND_INFO_SUCCESS, BRAND_INFO_REQUEST, BRAND_INFO_FAILURE, BRAND_AND_IMAGES_FAILURE, BRAND_AND_IMAGES_REQUEST, BRAND_AND_IMAGES_SUCCESS } from './types';
import { brandService } from '../_services';

export function getMostPopularBrandsAndImages(){
    return dispatch => {
      dispatch(request());
      brandService.getMostPopularBrandsAndImages()
        .then(topBrandsInfo => dispatch(success(topBrandsInfo)))
        .catch(err => dispatch(failure(err)));
    }
  
    function request() { return { type: BRAND_INFO_REQUEST }}
    function success(topBrandsInfo) { return { type: BRAND_INFO_SUCCESS, topBrandsInfo }}
    function failure(err) { return { type: BRAND_INFO_FAILURE, err }}
  }

export function getBrandInfoAndImages(brandName){
  return dispatch => {
    dispatch(request());
    brandService.getBrandInfoAndImages(brandName)
      .then(brandsInfo => dispatch(success(brandsInfo)))
      .catch(err => dispatch(failure(err)));
  }

  function request(){ return { type:BRAND_AND_IMAGES_REQUEST }}
  function success(brandsInfo){ return { type: BRAND_AND_IMAGES_SUCCESS, brandsInfo }}
  function failure(err){ return { type: BRAND_AND_IMAGES_FAILURE, err }}
}