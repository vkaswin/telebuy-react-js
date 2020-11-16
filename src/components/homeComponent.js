import React, { Component } from 'react';
import axios from 'axios';
import Context from '../context'

class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            latest_product : [],
            top_sellers : [],
            top_new : [],
            recently_viewed : [],
            cart : []
        }
    }
    componentDidMount(){
        let url = 'https://shop143.herokuapp.com/telebuy/api/products/latest';
        axios.get(url).then((response)=>{
            this.setState({
                latest_product : response.data
            })
            this.state.latest_product.map((value,index)=>{
                value.class = true;
                value.count = 1;
            })
            this.setState({
                latest_product : this.state.latest_product
            })
        }).catch((error)=>{

        })
        let url_1 = 'https://shop143.herokuapp.com/telebuy/api/product/preview';
        axios.get(url_1).then((response)=>{
            this.setState({
                top_sellers : response.data.topSelling,
                top_new : response.data.topNew,
                recently_viewed : response.data.recentlyViewed
            })
        }).catch((error)=>{

        })
    }
    handleCart(position){
        this.state.latest_product[position].class = false;
        this.setState({
            latest_product : this.state.latest_product
        })
        this.state.cart.push(this.state.latest_product[position]);
        this.context.data(this.state.cart);
    }
    render() {
        let TopSellers = this.state.top_sellers.map((value,index)=>{
            return(
                <div className="row position" key={index}>
                    <div className="col-5">
                        <img className="product-img-1" src={value.image}></img>
                    </div>
                    <div className="col-7">
                    <b>{value.name}</b>
                    <br></br>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <br></br>
                    <b className="price-1">{value.actual_price}</b><span className="price-2">{value.discount_price}</span>
                    </div>
                </div>
            );
        })
        let RecentlyViewed = this.state.recently_viewed.map((value,index)=>{
            return(
                <div className="row position" key={index}>
                    <div className="col-5">
                        <img className="product-img-1" src={value.image}></img>
                    </div>
                    <div className="col-7">
                    <b>{value.name}</b>
                    <br></br>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <br></br>
                    <b className="price-1">{value.actual_price}</b><span className="price-2">{value.discount_price}</span>
                    </div>
                </div>
            );
        })
        let TopNew = this.state.top_new.map((value,index)=>{
            return(
                <div className="row position" key={index}>
                    <div className="col-5">
                        <img className="product-img-1" src={value.image}></img>
                    </div>
                    <div className="col-7">
                    <b>{value.name}</b>
                    <br></br>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <br></br>
                    <b className="price-1">{value.actual_price}</b><span className="price-2">{value.discount_price}</span>
                    </div>
                </div>
            );
        })
        let LatestProduct = this.state.latest_product.map((value,index)=>{
            return(
                <div className="col-3 view display" key={index}>
                    <div>
                        <img className={ value.class ?"product-img" : "product-img-added"} src={value.image}></img>
                    </div>
                    <div className={value.class ? "btn-overlay" : "btn-overlay-added"}>
                        <button className="btn-cart" onClick={()=>this.handleCart(index)}>Add to Cart</button>
                        <br></br>
                        <button className="btn-details">See Details</button>
                    </div>
                    <b className={value.class ? "message" : "message-added"}>Added to Cart</b>
                        <b>{value.name}</b>
                        <br></br>
                        <b className="price-1">{value.actual_price}</b><span className="price-2">{value.discount_price}</span>
                </div>
            );
        })
        return (
            <Context.Consumer>
                {()=>{
                    return(
                        <div>
                <br></br>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../images/slider-1.jpg')} className="carousel-img d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/slider-2.jpg')} className="carousel-img d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/slider-3.jpg')} className="carousel-img d-block w-100"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="product">
                <span>Latest Products</span>
            </div>
            <br></br>
            <div className="row">
                <div className="col-10 offset-1">
                    {LatestProduct}
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 policy">
                    <div className="col-3 return">
                        <div className="content">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-repeat " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                        </svg>
                        <br></br>
                            <b>30 Days Return</b>
                        </div>
                    </div>
                    <div className="col-3 shipping">
                        <div className="content">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-truck content-img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                        <br></br>
                        <b>Free Shipping</b>
                        </div>
                    </div>
                    <div className="col-3 payment">
                        <div className="content">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-lock-fill content-img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
                            <path fillRule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                        </svg>
                        <br></br>
                        <b>Secure Payments</b>
                        </div>
                    </div>
                    <div className="col-3 new-product">
                        <div className="content">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-gift-fill content-img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3z"/>
                            <path d="M15 7v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                        </svg>
                        <br></br>
                            <b>New Products</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 content-middle">
                    <div className="col-4 view">
                        <span className="main-content">Top Sellers</span>
                        <button className="btn-view view-float">View All</button>
                    </div>
                    <div className="col-4 view">
                        <span className="main-content">Recently Viewed</span>
                        <button className="btn-view view-float">View All</button>
                    </div>
                    <div className="col-4 view">
                        <span className="main-content">Top New</span>
                        <button className="btn-view view-float">View All</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 align">
                    <div className="col-4 view">
                        {TopSellers}
                    </div>
                    <div className="col-4 view">
                        {RecentlyViewed}
                    </div>
                    <div className="col-4 view">
                        {TopNew}
                    </div>
                </div>
            </div>
            </div>
                    );
                }}
            
            </Context.Consumer>
            
        );
    }
}
HomeComponent.contextType = Context;
export default HomeComponent;