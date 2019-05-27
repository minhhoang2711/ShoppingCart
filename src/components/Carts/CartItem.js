import React, { Component } from 'react';
import * as Message from './../../controllers/constants/Message'

export default class CartItem extends Component {
    onChangeQuantity =(product, quantity)=>{
        var {onUpdateCartItem, onChangeMessage} = this.props;
        onUpdateCartItem(product, quantity);
        onChangeMessage(Message.MSG_UPDATE_TO_CARD_SUCCESS);
    }

    getPriceForProduct =(price, quantity)=>{
        return price*quantity;
    }

    onDeleteCartItem =(id)=>{
        var {onDeleteProduct, onChangeMessage} = this.props;
        onDeleteProduct(id);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS);
    }

    render() {
        var {cart} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" 
                        onClick={() => this.onChangeQuantity(cart.product, cart.quantity - 1)}>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => this.onChangeQuantity(cart.product, cart.quantity + 1)}>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.getPriceForProduct(cart.product.price,cart.quantity)}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip"
                        data-placement="top" title="" onClick={()=>this.onDeleteCartItem(cart.product.id)} data-original-title="Remove item">
                        X
                        </button>
                </td>
            </tr>
        )
    }
}