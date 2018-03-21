import * as types from '../constants/ActionTypes'
import {getProduct} from  '../reducers'

export const addToCart = productId =>(dispatch,getState)=>{
console.log("++++++++++++++++++++++++++++");
console.log(getState().products.byId[productId]);
  if(getState().products.byId[productId].stock>0){
    dispatch({
               type: types.ADD_TO_CART,
               productId
        })
  }
}
let productList = [{  id: 1001,  name: 'Beats EP头戴式耳机',
                                  price: 558,
                                  type: 4,
                                  stock: 2,
                                  sales: 1872,
                                  img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
                      },
                      {
                                  id: 1002,
                                  name: '雀巢（Nestle）高钙成人奶粉',
                                  price: 60,
                                  type: 3,
                                  stock: 1,
                                  sales: 2374,
                                  img: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
  } ]
const receiveProducts = products => ({
           type: types.RECEIVE_PRODUCTS,
           products
 })

export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(productList))
}
