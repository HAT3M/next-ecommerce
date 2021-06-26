import { combineReducers } from 'redux';
import { shopReducer } from './shoppingReducer';

export default combineReducers({
  shop: shopReducer,
});
