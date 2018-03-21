import React, { Component } from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import CartList from '../../Component/CartList/CartList';
import {getTotal} from '../../reducers'
import { connect } from 'react-redux'
// 组件样式
var styles = StyleSheet.create({
    container:{
    flex:1
    },
    total:{
        height:44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    }

});
 class Cart extends React.Component {
  static navigationOptions = {
    title: '购物车',
  };

  render() {
    return (
      <View style={styles.container}>
       <CartList />
       <View style={styles.total}><Text>总价:{this.props.total}</Text></View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
    total: getTotal(state)
  })

export default connect(
  mapStateToProps
)(Cart)
