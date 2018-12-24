import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
    auth: authReducer,
    brand: brandReducer,
    gallery: galleryReducer,
});