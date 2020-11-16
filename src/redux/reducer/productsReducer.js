const initialValue = {
    products : []
}
export default function productsReducer( state=initialValue,action ){
    console.log(action)
    switch(action.type){
        case 'CART_PRODUCT' :
            return {...state, products: [...state.products, action.value]}
        default:
            return state;
    }
}