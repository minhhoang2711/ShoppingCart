import * as types from './../constants/ActionType';

export const acAddToCart = (product, quantity) => {//khởi tạo 1 action để dispatch
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    };
}

export const acChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message: message
    };
}

export const actDeleteProduct  = (id) =>{
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        id: id
    };
}

export const actUpdateProduct =(product, quantity)=>{
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product: product,
        quantity: quantity
    };
}