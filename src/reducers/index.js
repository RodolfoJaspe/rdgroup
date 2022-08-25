import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { designReducer } from './designReducer';
import { constructionReducer } from './constructionReducer';
import { productsReducer } from './productsReducer';
import { firstSliderReducer } from './firstSliderReducer';

export const rootReducer = combineReducers({ userReducer, designReducer, constructionReducer, productsReducer, firstSliderReducer
})