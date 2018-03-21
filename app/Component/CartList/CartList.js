//商品列表

'use strict';

import React, { Component } from 'react';
import {  Animated,FlatList,StyleSheet, Text, Image,View} from 'react-native';
import CartItem from '../CartItem/CartItem'
import {getCartProducts } from '../../reducers'
import { connect } from 'react-redux'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// 组件样式
var styles = StyleSheet.create({
    listView : {
    flex:1,
        backgroundColor : '#ffffff'
    },
    nullCartTips:{
      padding:10,
      flexDirection:'row',
      justifyContent: 'center'
    }
});

 class CartList extends React.Component {
        constructor(props) {
          super(props);
        }
        _keyExtractor=(item, index) => {
            return typeof item.id=='number'? String(item.id) :item.id
        }
        //渲染列表
       renderListView(){
        let nullList = <View style={styles.nullCartTips}><Text>当前购物车为空</Text></View>

         return (<AnimatedFlatList contentInset={{top: -64}}
                           data={this.props.cartList}
                           renderItem={this.renderItem}
                           style={styles.listView}
                           ListEmptyComponent={nullList}
                          keyExtractor ={this._keyExtractor}
                            />
              )

        }

    //渲染每一行
    renderItem({item}) {
        return (
            <CartItem item={item}  />
        );
    }
	render() {
		return (
            this.renderListView()
        );
	}

  }

const mapStateToProps = (state) => ({
    cartList: getCartProducts(state)
  })

export default connect(
  mapStateToProps
)(CartList)
