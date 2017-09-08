import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HomeActiveItem from './HomeActiveItem.js';
import { rem, scale, wWidth } from '../../js/utils/rem';

class HomeRecommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoper: null,
      active: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    let { shoper, active } = require('../../Api/HomeRecommend.json');

    this.setState({
      shoper, active
    })
  }

  // 左侧商家
  renderShoper = () => {
    let data = this.state.shoper;

    if(!data){
      return;
    }

    return (
      <View>
        <Image source={{uri: data.img1}} style={styles.img1}/>
        <Image source={{uri: data.img2}} style={styles.img2}/>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.price}>¥{data.price}</Text>
          <Text style={styles.sale}>{data.sale}</Text>
        </View>
      </View>
    );
  }

  // 右侧活动
  renderActive() {
    let data = this.state.active;
    let dom = [];
    let color = ['#ffa500', '#ff0000'];

    data.forEach((item, index) => {
      dom.push(
        <HomeActiveItem
          key={index}
          {...item}
          color={color[index]}
          styleSheet={index !== (data.length - 1) ? styles.bb : ''}
        ></HomeActiveItem>);
    });

    return dom;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.shoper}>
          {this.renderShoper()}
        </TouchableOpacity>
        <View style={styles.active}>
          {this.renderActive()}
        </View>
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
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  bb: {
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd',
  },
  shoper: {
    flex: 1,
    borderRightWidth: 1 / scale,
    borderColor: '#ddd',
    paddingTop: rem(20),
    alignItems: 'center'
  },
  img1: {
    width: rem(155),
    height: rem(50)
  },
  img2: {
    width: rem(135),
    height: rem(60),
    marginTop: rem(12)
  },
  title: {
    fontSize: rem(24),
    color: '#999',
    marginTop: rem(10)
  },
  subTitle: {
    marginTop: rem(6),
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    color: '#21c0af',
    fontSize: rem(20),
  },
  sale: {
    color: '#ffa600',
    backgroundColor: '#ffff00',
    paddingVertical: rem(6),
    paddingHorizontal: rem(3),
    borderRadius: rem(5),
    display: 'flex',
    fontSize: rem(20),
  },
  active: {
    flex: 1,
  }
})

export default HomeRecommend;