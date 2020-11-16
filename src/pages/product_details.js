import React, { Component } from 'react';
import axios from 'axios';

class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : '',
            status : ''
        }
    }
    componentDidMount(){
        let url = "https://shop143.herokuapp.com/telebuy/api/product/"+this.props.history.location.state;
        axios.get(url).then((response)=>{
            this.setState({
                data : response.data,
                status : response.request.status
            })
        }).catch((error)=>{
        })
    }
    render() {
        return (
            <div>
                {this.state.status == '200'? 
                <div className="row product-detail">
                <div className="col-4 offset-1">
                    <img className="product-detail-img" src={this.state.data.image}></img>
                </div>
                <div className="col-6">
                    <div className="product-name">
                        <b> {this.state.data.name} </b>
                    </div>
                    <div className="product-name">
                        <b className="price-1">{this.state.data.actual_price}</b><span className="price-2">{this.state.data.discount_price}</span>
                    </div>
                    <button className="btn-cart">Add to Cart</button>
                    <br></br>
                    <span>Category : <span className="smart">{this.state.data.category}</span></span>
                    <br></br>
                    <span>Tags : <span className="smart">{this.state.data.tags}.</span></span>
                    <br></br>
                    <div className="product-description">
                        <b>Product Description</b>
                        <p>{this.state.data.description}</p>
                    </div>
                </div>
            </div>
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
        );
    }
}

export default ProductDetails;