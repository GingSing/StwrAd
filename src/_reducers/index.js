import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import galleryReducer from './galleryReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    brand: brandReducer,
    gallery: galleryReducer,
    user: userReducer,
});