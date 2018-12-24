import { BRAND_INFO_SUCCESS, BRAND_INFO_REQUEST, BRAND_INFO_FAILURE } from './types';
import { brandService } from '../_services';

export function getBrandsInfo(){
    return dispatch => {
      dispatch(request());
      brandService.getBrandsInfo()
        .then(brandData => dispatch(success(brandData)))
        .catch(err => dispatch(failure()));
    }
  
    function request() { return { type: BRAND_INFO_REQUEST }}
    function success(brandData) { return { type: BRAND_INFO_SUCCESS, brandData }}
    function failure() { return { type: BRAND_INFO_FAILURE }}
  }