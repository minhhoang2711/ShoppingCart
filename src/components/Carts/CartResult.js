import React, { Component } from 'react'

export default class CartResult extends Component {
    // getTotalPrice =(carts)=>{
    //     var totalPrice = 0;
    //     if(carts.length > 0){
    //         for(var i = 0; i < carts.length; i++){
    //             totalPrice += carts[i].product.price * carts[i].quantity;
    //         }
    //     }
    //     return totalPrice;
    // }

    render() {
        var { totalPrice } = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{totalPrice}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }
}
