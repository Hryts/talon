import React, {Component} from 'react';
import utils from "../utils";
import {connect} from 'react-redux'
import {removeFromCart} from '../actions/cartActions'

class Basket extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length===0?"Basket is empty yet": <div>You have {cartItems.length} products in the basket</div>}
                {cartItems.length>0 &&
                <div>
                    <ul>
                        {cartItems.map(item =>
                            <li>
                                <b>{item.title}</b>
                                X {item.count/2 } = {item.price * item.count}
                                <button className="btn btn-danger"
                                onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>X</button>
                            </li>)}
                    </ul>
                    Total: {utils.formatCurrency(cartItems.reduce((a, c) => a + c.price*c.count, 0))};
                    <br/>
                    <button className="btn btn-primary" onClick={()=>alert("Checkout needs to implement...")}>Checkout</button>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state =>({
    cartItems: state.cart.items
})

export default connect(mapStateToProps, {removeFromCart})(Basket);