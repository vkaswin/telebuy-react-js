import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
import * as productsAction from '../redux/action/productsAction' 

class ShopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            all_product : [],
            products : [],
            status : '',
        }
    }
    componentDidMount(){
        let url = 'https://shop143.herokuapp.com/telebuy/api/products';
        axios.get(url).then((response)=>{
            this.setState({
                all_product : response.data,
                status : response.request.status
            })
            this.setState({
                all_product : this.state.all_product
            })
        }).catch((error)=>{

        })
        let URL = 'http://shoping-cart-api.herokuapp.com/products';
        axios.get(URL).then((response)=>{
            this.setState({
                products : response.data
            })
        })
    }
    handleCart(position){
        this.props.actions.productsAction(this.state.all_product[position]);
    }
    detailPage(id){
        this.props.history.push('/product-details',id);
    }
    render() {
        let AllProduct = this.state.all_product.map((value,index)=>{
            return(
                <div className="col-3 view align-shop display" key={index}>
                    <img className="product-img" src={value.image}></img>
                    <div className="btn-overlay">
                        <button className="btn-cart" onClick={()=>this.handleCart(index)}>Add to Cart</button>
                        <br></br>
                        <button className="btn-details" onClick={()=>this.detailPage(value.id)}>See Details</button>
                    </div>
                    <br></br>
                    <b>{value.name}</b>
                    <br></br>
                    <b className="price-1">{value.actual_price}</b><span className="price-2">{value.discount_price}</span>
                </div>
            );
        })
        let product = this.state.products.map((value,index)=>{
            return(
                <div className="col-3 view align-shop display" key={index}>
                    <img className="product-img" src={value.image}></img>
                    <br></br>
                    <b>{value.name}</b>
                    <br></br>
                    <b className="price-1">{value.price}</b>
                    <br></br>
                    <b>Category : {value.category}</b>
                </div>
            );
        })
        return (
            <div>
                <div className="row latest">
                    <div className="col-12">
                        <span>Latest Products</span>
                    </div>
                </div>
            <div className="row">
                <div className="col-10 offset-1">
                    {this.state.status == '200'? <div>{AllProduct}{product}</div>
                    :
                    <div className="spinner">
                    <div className="spinner-grow text-primary spinner-align" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-primary spinner-align" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-primary spinner-align" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-primary spinner-align" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-primary spinner-align" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    </div>
                    }
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(productsAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopComponent);