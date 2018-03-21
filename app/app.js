import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import HomeScreen from './Page/Home/Home'
import CartScreen from './Page/Cart/Cart'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {getAllProducts} from './actions'

const middleware = [ thunk ];
//if (process.env.NODE_ENV !== 'production') {
//  middleware.push(createLogger());
//}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

const MainScreenNavigator = StackNavigator({
  Home: { screen: HomeScreen},
  Cart:{screen: CartScreen}
  },
 {
    initialRouteName: 'Home',
     /* The header config from HomeScreen is now here */
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#5D4285',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }
  }
);

export default  class App extends React.Component {
  render() {
      return(
      <Provider store={store}>
        <MainScreenNavigator />
       </Provider>
      )
  }
}
