import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HomeLabelAct from './HomeLabelAct.js';
import { rem, scale, wWidth } from '../../js/utils/rem';

class HomeHot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hot: [],
      normal: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    let { hot, normal } = require('../../Api/HomeHot.json');

    this.setState({
      hot, normal
    })
  }

  // 热门频道
  renderHot() {
    let data = this.state.hot;
    let dom = [];

    data.forEach((item, index) => {
      dom.push(
        <TouchableOpacity style={styles.hotItem} key={index}>
          <View style={styles.hotContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <Text style={styles.hotLabel}>hot</Text>
          </View>
          <Image source={{ uri: item.img }} style={styles.hotImg}></Image>
        </TouchableOpacity>
      );
    });

    return dom;
  }

  // 普通频道
  renderNormal() {
    let data = this.state.normal;
    let dom = [];

    data.forEach((item, index) => {
      dom.push(
        <TouchableOpacity style={styles.normalItem} key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Image source={{ uri: item.img }} style={styles.normalImg}></Image>
        </TouchableOpacity>
      );
    });

    return dom;
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeLabelAct
          title="热门频道"
          img="icon_fire"
          styleSheet={styles.bb}></HomeLabelAct>
        <View style={styles.main}>
          <View style={styles.hotContainer}>
            {this.renderHot()}
          </View>
          <View style={styles.normalContainer}>
            {this.renderNormal()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: rem(20),
    backgroundColor: '#fff',
  },
  bb: {
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd',
  },
  main: {
    paddingVertical: rem(8),
    paddingHorizontal: rem(6),
  },
  title: {
    lineHeight: rem(44),
    fontSize: rem(32),
    color: '#666'
  },
  subTitle: {
    lineHeight: rem(38),
    fontSize: rem(24),
    color: '#999'
  },

  hotContainer: {
    flexDirection: 'row'
  },
  hotItem: {
    minHeight: rem(150),
    margin: rem(4),
    paddingVertical: rem(12),
    paddingHorizontal: rem(20),
    backgroundColor: '#f7f8f9',
    flex: 1,
    flexDirection: 'row'
  },
  hotContent: {
    flex: 1,
  },
  hotImg: {
    width: rem(165),
    height: rem(125)
  },

  normalContainer: {
    flexDirection: 'row'
  },
  normalItem: {
    margin: rem(4),
    paddingVertical: rem(4),
    backgroundColor: '#f7f8f9',
    flex: 1,
    alignItems: 'center'
  },
  normalImg: {
    width: rem(140),
    height: rem(110),
    marginTop: rem(5),
  },
})

export default HomeHot;