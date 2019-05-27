import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './../components/Products/ProductList'
import ProductItem from './../components/Products/ProductItem'
import PropTypes from 'prop-types';
import {acAddToCart, acChangeMessage} from './../controllers/actions/index'

class ProductContainer extends Component {
    mapPropsToProductItem = (products) => {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if (products.length > 0) {
            result = products.map((value, index) => {
                return <ProductItem key={index} product={value} acAddToCart={onAddToCart} acChangeMessage={onChangeMessage}/>
            });
        }
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <ProductList mapPropsToProductItem={this.mapPropsToProductItem(products)} /> 
        )
    }
}
ProductContainer.propTypes = {
    products: PropTypes.arrayOf(//kiểm tra mảng, object
        PropTypes.shape({//kiểm tra từng thuộc tính
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired

        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}



const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(acAddToCart(product, 1));
        },
        onChangeMessage: (message) =>{
            dispatch(acChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)