//单个商品坑位
//doc组件生命周期： http://reactjs.cn/react/docs/working-with-the-browser.html#component-lifecycle

'use strict';
import React, { Component } from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,TouchableHighlight} from 'react-native';
import {addToCart} from '../../actions'
import { connect } from 'react-redux'
// 组件样式
var styles = StyleSheet.create({
    container: {
        marginTop : 10,
    	flex : 1,
    	padding : 10,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
    },
    goodImage:{
     width:60,
     height:60
    },
    goodInfo:{
     flex:1,
     marginLeft:20,
     flexDirection:'column',
    },
    goodName:{
      flex:1,
      color:'#363636'
    },
    goodAmount:{
      width:100
    },
    goodPrice:{
     width:100,
     color:'#7a45e5'
    },
    addToCart:{
     flexDirection:'row',
     justifyContent: 'center',
     position:'absolute',
      backgroundColor:'#7a45e5',
      width:32,
      height:22,
      borderRadius:12,
      right:0,
      bottom:2
    },
    addToCartTxt:{
      color:'#fff',
      fontSize:16,
    }
});


 class GoodItem extends React.Component {
           render() {
            var item = this.props.item;
            		return (
            				<View style={styles.container}>
            				  <View><Image style={styles.goodImage} source={{uri:item.img}}></Image></View>
            				  <View style={styles.goodInfo}>
                                   <Text style={styles.goodName} numberOfLines={2}>{item.name}</Text>
                                   <Text style={styles.goodAmount} numberOfLines={1}>{item.sales}人付款</Text>
                                   <Text style={styles.goodPrice} numberOfLines={1}>¥{item.price}</Text>
                                <TouchableOpacity onPress={()=>{this.props.addToCart(item.id)}}  style={styles.addToCart}><Text style={styles.addToCartTxt}>+</Text></TouchableOpacity>
            				  </View>
            				</View>
            		);
           }
  }


export default connect(
null,
{addToCart}
 )(GoodItem)
