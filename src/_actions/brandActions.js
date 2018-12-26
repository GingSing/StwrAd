import { BRAND_INFO_SUCCESS, BRAND_INFO_REQUEST, BRAND_INFO_FAILURE } from './types';
import { brandService } from '../_services';

export function getMostPopularBrandsAndImages(){
    return dispatch => {
      dispatch(request());
      brandService.getMostPopularBrandsAndImages()
        .then(companyInfo => dispatch(success(companyInfo)))
        .catch(err => dispatch(failure(err)));
    }
  
    function request() { return { type: BRAND_INFO_REQUEST }}
    function success(companyInfo) { return { type: BRAND_INFO_SUCCESS, companyInfo }}
    function failure(err) { return { type: BRAND_INFO_FAILURE, err }}
  }