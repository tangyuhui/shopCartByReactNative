//商品列表

'use strict';

import React, { Component } from 'react';
import { Animated,FlatList,StyleSheet, Text, Image,View} from 'react-native';
import GoodItem from '../GoodItem/GoodItem'
import {getVisibleProducts} from '../../reducers/products'
import { connect } from 'react-redux'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// 组件样式
var styles = StyleSheet.create({
    loading :{
        marginTop : 10,
        flex : 1,
        justifyContent: 'center', alignItems: 'center',
        height : 21,
        resizeMode: Image.resizeMode.contain
    },
    listView : {
    flex:1,
        backgroundColor : '#ffffff'
    },
     tips:{
           padding:10,
           flexDirection:'row',
           justifyContent: 'center'
    }
});

class GoodList extends React.Component {
        constructor(props) {
          super(props);
        }
     _keyExtractor=(item, index) => {
     return typeof item.id=='number'? String(item.id) :item.id
     }
        //渲染列表
    renderListView(){
        var nullList = <View style={styles.tips}><Text>暂时无产品展示哦~</Text></View>
            return(
              <AnimatedFlatList contentInset={{top: -64}}
                data={this.props.productData}
                renderItem={this.renderRow}
                style={styles.listView}
                keyExtractor ={this._keyExtractor}
                ListEmptyComponent={nullList} />
            );
        }

    //渲染每一行
    renderRow({item}) {
        return (
            <GoodItem item={item} keys={item.id} />
        );
    }
	render() {
		return (
            this.renderListView()
        );
	}

  }

  const mapStateToProps = state =>{
  return  ({
             productData: getVisibleProducts(state.products)
     })
  }

export default connect(
  mapStateToProps
)(GoodList)

