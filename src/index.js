import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import  Context from '../src/context'
import configureStore from './redux/store/configure_store'
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'jquery/dist/jquery'

import HomeComponent from './components/homeComponent'
import ShopComponent from './components/shopComponent'
import CartComponent from './components/cartComponent'
import CheckoutComponent from './components/checkoutComponent'
import ProductDetails from './pages/product_details';

import './index.css';

const store = configureStore();

class Telebuy extends Component {
    constructor(props){
        super(props);
        this.state = {
            received : []
        }
    }
    getValue = (value) =>{
        this.setState({
            received : value
        })
    }
    render() {
        return (
            <Provider store={store}>
            <Context.Provider value={{
                data : this.getValue,
                cart : this.state.received
            }}> 
            <BrowserRouter>
                        <div className="row">
                            <div className="offset-1 nav-head">
                                <ul>
                                    <li><NavLink to='/' className="link" activeClassName="link-active" exact={true}><b>Home</b></NavLink></li>
                                    <li><NavLink to='/shop' className="link" activeClassName="link-active"><b>Shop</b></NavLink></li>
                                    <li><NavLink to='/product-details' className="link" activeClassName="link-active"><b>Product Details</b></NavLink></li>
                                    <li><NavLink to='/cart' className="link" activeClassName="link-active"><b>Cart</b></NavLink></li>
                                    <li><NavLink to='/checkout' className="link" activeClassName="link-active"><b>Checkout</b></NavLink></li>
                                </ul>
                            </div>
                        </div>
                <Switch>
                    <Route path='/' exact component={HomeComponent}></Route>
                    <Route path='/shop' component={ShopComponent}></Route>
                    <Route path='/cart' component={CartComponent}></Route>
                    <Route path='/checkout' component={CheckoutComponent}></Route>
                    <Route path='/product-details' component={ProductDetails}></Route>
                </Switch>
                <div className="row footer">
                            <div className="col-10 offset-1">
                                <span>&#169; 2020 Telebuy. All Rights Reserved.</span>
                            </div>
                        </div>
            </BrowserRouter>
            </Context.Provider>
            </Provider>
        );
    }
}

ReactDOM.render(<Telebuy></Telebuy>,document.getElementById('root'));
