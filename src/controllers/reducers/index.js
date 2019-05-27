//combine các reducer ở đây
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import messageReducer from './messageReducer';

//tạo reducer cho cả hệ thống
const appReducers = combineReducers({
    products: productReducer,
    carts: cartReducer,
    message: messageReducer
});

export default appReducers;