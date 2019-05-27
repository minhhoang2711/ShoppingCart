import React, { Component } from 'react'

class ProductList extends Component {

    render() {
        return (
            <div>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {this.props.mapPropsToProductItem}
                    </div>
                </section>
            </div>
        )
    }
}

export default ProductList