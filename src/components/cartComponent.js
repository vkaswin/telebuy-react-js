import React, { Component } from 'react';
import Context from '../context'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
import * as productsAction from '../redux/action/productsAction'

class CartComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart : []
        }
    }
    componentDidMount(){
        this.props.cartproduct.map((value)=>{
            value.count = 1;
        })
        this.setState({
            cart : this.props.cartproduct
        })
    }
    handleQuantity = (position,event) => {
        if(event.target.value>0){
        let update = this.state.cart;
        update[position].count = event.target.value;
        this.setState({
            cart : update
        })}
    }
    render() {
        let total = this.state.cart.reduce((current, previous)=>{
            return current + previous.count * parseInt(previous.actual_price.substring(1));
          }, 0)
        return (
            <Context.Consumer>
                {(value)=>{
                    return(
                        <div>
                <div className="row cart-align">
                    <div className="col-10 offset-1">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.cart.length ==0 && 
                    <tr>
                        <td colSpan='5'>No Products in the Cart</td>
                    </tr>}
                    {this.state.cart.map((value,index)=>{
                    return(
                <tr key={index}>
                    <td><img className="cart-img" src={value.image}></img></td>
                    <td><b> {value.name} </b></td>
                    <td><b> {value.actual_price} </b></td>
                    <td><input onChange={this.handleQuantity.bind(this,index)} value={value.count} type="number"></input></td>
                    <td><b>	&#36;{value.count * parseInt(value.actual_price.substring(1))}</b></td>
                </tr>
            );
        })}
                    </tbody>
                </table>
                </div>
                </div>
                <div className="row cart-total">
                    <div className="col-4 offset-6">
                        <b className="cart">CART TOTALS</b>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="cart-footer">Cart Subtotal</th>
                                    <td>&#36;{total}</td>
                                </tr>
                                <tr>
                                    <th className="cart-footer">Shipping and Handling</th>
                                    <td>Free Shipping</td>
                                </tr>
                                <tr>
                                    <th className="cart-footer">Order Total</th>
                                    <td><b>&#36;{total}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                    );
                }}
            
            </Context.Consumer>
        );
    }
}
CartComponent.contextType = Context;

function mapStateToProps(state){
    return{
        cartproduct : state.productsReducer.products
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(productsAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartComponent);