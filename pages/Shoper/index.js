import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Text,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');
var ITEM_HEIGHT = 100;


const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
  }
});


export default class ShoperScreen extends Component {

  constructor(props) {
    super(props);
    var data = [];
    for (var i = 0; i < 30; i++) {
      data.push({ key: i, title: i + '' });
    }
    this.state = {
      data: data,
      page: 1,
      refreshing: false
    };
  }

  _renderItem = (item) => {
    let item1 = item;
    var txt = '第' + item1.index + '个' + ' title=' + item1.item.title;
    var bgColor = item1.index % 2 == 0 ? 'red' : 'blue';
    return (
      <TouchableOpacity onPress={() => {
        alert(txt);
      }}>
        <Text style={[{
          flex: 1,
          height: ITEM_HEIGHT,
          backgroundColor: bgColor,
          width: width / 2
        }, styles.txt]}>{txt}</Text>
      </TouchableOpacity>
    )
  }

  _header = () => {
    return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是头部</Text>;
  }

  _footer = () => {
    return <Text style={[styles.txt, { backgroundColor: 'black' }]}>这是尾部</Text>;
  }
  _separator = () => {
    return <View style={{ height: 2, backgroundColor: 'yellow' }}/>;
  }

  _onRefresh() {
    alert('正在刷新中.... ');
  }

  _onEndReached = () => {
    this.setState((prevState) => {
      var prevPage = prevState.page;
      var newPage = prevPage + 1;

      var data = [];
      for (var i = prevPage * 30; i < newPage * 30; i++) {
        data.push({ key: i, title: i + '' });
      }

      return {
        page: newPage,
        data: prevState.data.concat(data)
      }
    });
  }

  renderScroll(){
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
      </ScrollView>
    );
  }

  render() {

    return (
      <View style={{height: 100}}>
        <ScrollView>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
          <Button title='滚动到指定位置' onPress={() => {
            //this._flatList.scrollToEnd();
            //this._flatList.scrollToIndex({viewPosition:0,index:8});
            this._flatList.scrollToOffset({ animated: true, offset: 2000 });
          }}/>
          <View style={{ flex: 1 }}>
            <FlatList
              ref={(flatList) => this._flatList = flatList}
              ListHeaderComponent={this._header}
              ListFooterComponent={this._footer}
              ItemSeparatorComponent={this._separator}
              renderItem={this._renderItem}

              numColumns={2}
              columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }}
              refreshing={this.state.refreshing}
              getItemLayout={(data, index) => (
                { length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 2) * index, index }
              )}
              onRefresh={this._onRefresh}
              onEndReachedThreshold={0.1}
              // onEndReached={(info) => {
              //   alert("滑动到底部了");
              // } }
              onEndReached={this._onEndReached}
              onViewableItemsChanged={(info) => {
                //    alert("可见不可见触发");
              }}
              data={this.state.data}>
            </FlatList>
          </View>
        </ScrollView>
      </View>
    );
  }
}
