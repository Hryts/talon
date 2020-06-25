import React, {Component} from 'react';
import {connect} from 'react-redux'
import {filterProducts, sortProducts} from '../actions/productActions'

class Filter extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-4">
                {this.props.filteredProducts.length} products found
            </div>
            <div className="col-md-4">
                <label htmlFor="">
                    Order by
                    <select className="form-control" value={this.props.sort}
                    onChange={(e) => this.props.sortProducts(this.props.filteredProducts,
                        e.target.value )}>
                    <option value="">Select</option>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to lowest</option>
                    </select>
                </label>
            </div>
            <div className="col-md-4"/>
                <label htmlFor="">
                    Filter ISO
                    <select className="form-control" value={this.props.fformat}
                        onChange={(e) => this.props.filterProducts(this.props.products,
                            e.target.value)}>
                        <option value="">ALL</option>
                        <option value="6:6">6:6</option>
                        <option value="6:9">6:9</option>
                        <option value="35">35</option>
                    </select>
                </label>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    fformat: state.products.fformat,
    sort: state.products.sort
})

export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter)