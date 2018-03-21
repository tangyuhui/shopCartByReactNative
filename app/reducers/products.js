import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'



const products = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_CART:
     return {
      ...state,
     stock:state.stock-1,
     sales:state.sales+1
     }
    default:
      return state
  }
}
const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
       var a={
          ...state,
          [productId]: products(state[productId], action)
        }
        return a;
      }
      return state
  }
}
const visibleIds =(state = [], action)=>{
    switch (action.type) {
    case RECEIVE_PRODUCTS:
    return  action.products.map((product)=>product.id)
    default:
     return state
   }
}
export const getProduct =(state, id) => state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id)).filter(product=>product.stock>0)

export default combineReducers({
  byId,
  visibleIds
})





