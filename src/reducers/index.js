import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { designReducer } from './designReducer';
import { constructionReducer } from './constructionReducer';
import { productsReducer } from './productsReducer';
import { firstSliderReducer } from './firstSliderReducer';
import { mainReducer } from './mainReducer';


export const rootReducer = combineReducers({ userReducer, designReducer, constructionReducer, productsReducer, firstSliderReducer, mainReducer
})