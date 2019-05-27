import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from './../components/Carts/Cart'
import PropTypes from 'prop-types'
import CartItem from '../components/Carts/CartItem';
import * as messages from './../controllers/constants/Message'
import CartResult from '../components/Carts/CartResult';
import { actDeleteProduct, acChangeMessage, actUpdateProduct } from '../controllers/actions';

class CartContainer extends Component {
    mapPropsToCartItem = (carts, onDeleteProduct, onChangeMessage, onUpdateCartItem) => {
        var result = [];
        if (carts.length > 0) {
            result = carts.map((value, index) => {
                return <CartItem key={index} cart={value} onDeleteProduct={onDeleteProduct} onChangeMessage={onChangeMessage} onUpdateCartItem={onUpdateCartItem}/>
            });
        } else if (carts.length === 0) {
            result = <tr><td>{messages.MSG_CART_EMPTY}</td></tr>;
        }
        return result;
    }

    getTotalPriceInCart = (carts) => {
        var totalPrice = 0;
        if(carts.length > 0){
            for(var i = 0; i < carts.length; i++){
                totalPrice += carts[i].product.price * carts[i].quantity;
            }
        }
        return <CartResult totalPrice={totalPrice}/>;
    }

    render() {
        var { carts,onDeleteProduct, onChangeMessage, onUpdateCartItem } = this.props;
        return (
            <div>
                <Cart mapPropsToCartItem={this.mapPropsToCartItem(carts, onDeleteProduct, onChangeMessage, onUpdateCartItem)} getTotalPrice={this.getTotalPriceInCart(carts)}/>
            </div>
        )
    }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onDeleteProduct: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateCartItem: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        carts: state.carts
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (id) => {
            dispatch(actDeleteProduct(id));
        },
        onChangeMessage: (message) => {
            dispatch(acChangeMessage(message));
        },
        onUpdateCartItem: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
