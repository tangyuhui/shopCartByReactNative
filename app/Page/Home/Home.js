import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View,TouchableHighlight,Button } from 'react-native';
import GoodList from '../../Component/GoodList/GoodList'

// 组件样式
var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center'
    }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
         <View style={styles.container}>
               <GoodList />
               <TouchableHighlight>
                     <View style={{padding: 20}}>
                          <Button  title="查看购物车"
                                 color="#5D4285"
                                 accessibilityLabel="Learn more about this purple button"
                                 onPress={() => this.props.navigation.navigate('Cart')}
                               />
                    </View>
               </TouchableHighlight>
        </View>
    )
  }
}
