import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import HomeLabelAct from './HomeLabelAct.js';
import HomeShopCenterItem from './HomeShopCenterItem.js';
import { rem, scale, wWidth } from '../../js/utils/rem';

class HomeShopCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      list: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    let { num, list } = require('../../Api/HomeShopCenter.json');

    this.setState({
      num, list
    })
  }

  // 活动列表
  renderShop() {
    let data = this.state.list;
    let dom = [];

    data.forEach((item, index) => {
      dom.push(
        <HomeShopCenterItem
          name={item.name}
          img={item.img}
          info={`${item.count}家优惠`}
          key={index}></HomeShopCenterItem>);
    });

    return dom;
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeLabelAct
          title="购物中心"
          img="icon_package"
          sub={`全部${this.state.num}家`}
          styleSheet={styles.bb}></HomeLabelAct>
        <ScrollView
          style={styles.shop}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {this.renderShop()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: rem(20),
    borderTopWidth: 1 / scale,
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  bb: {
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd',
  },
  shop: {
    flexDirection: 'row'
  }
})

export default HomeShopCenter;