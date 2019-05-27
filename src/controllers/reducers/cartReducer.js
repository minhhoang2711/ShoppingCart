import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'))
var initializeCart = data ? data : [];

var findById=(cart, product)=>{
    var index = -1;
    for(var i = 0; i < cart.length; i++){
        if(cart[i].product.id === product.id){
            index = i;
        }
    }
    return index;
}

var findByIdForDeleteCartItem =(cart, id)=>{
    var index = -1;
    for(var i = 0; i < cart.length; i++){
        if(cart[i].product.id === id){
            index = i;
        }
    }
    return index;
}

const cartReducer = (state = initializeCart, action) => {
    var {product, quantity, id} = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART://tạo reducer cho việc add to cart
            // console.log(action);
            index = findById(state, product);
            if(index === -1){
                state.push({product, quantity});
            }else{
                state[index].quantity += quantity; 
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            console.log(action);
            index = findByIdForDeleteCartItem(state, id);
            state.splice(index, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            console.log(JSON.parse(localStorage.getItem('CART')));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findById(state, product);
            if(index !== -1){
                if(quantity < 1){
                    state.splice(index, 1);
                }else{
                    state[index].quantity = quantity;
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default cartReducer;