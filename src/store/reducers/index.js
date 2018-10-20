import { combineReducers } from 'redux';
import authReducer  from './authReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    auth: authReducer,
    categories: categoriesReducer
});