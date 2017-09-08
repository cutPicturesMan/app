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

class HomeActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: null,
      active: []
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    let { main, active } = require('../../Api/HomeActive.json');

    this.setState({
      main, active
    })
  }

  // 首行广告
  renderMain = () => {
    let data = this.state.main;

    if (!data) {
      return;
    }

    return (
      <TouchableOpacity style={styles.main}>
        <View style={styles.mainText}>
          <Text style={styles.mainTitle}>{data.title}</Text>
          <Text style={styles.mainSubTitle}>{data.subTitle}</Text>
        </View>
        <Image source={{ uri: data.img }} style={styles.mainImg}></Image>
      </TouchableOpacity>
    );
  }

  // 活动列表
  renderActive() {
    let data = this.state.active;
    let dom = [];
    let color = ['#ffa500', '#ffc0cb', '#008000', '#800080'];

    data.forEach((item, index) => {
      let br = (index % 2 === 0) ? styles.br : '';

      dom.push(
        <HomeActiveItem
          {...item}
          key={index}
          color={color[index]}
          styleSheet={[{ width: wWidth / 2 }, br, styles.bb]}></HomeActiveItem>);
    });

    return dom;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderMain()}
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
    backgroundColor: '#fff',
    borderTopWidth: 1 / scale,
    borderColor: '#ddd',
  },
  br: {
    borderRightWidth: 1 / scale,
    borderColor: '#ddd',
  },
  bb: {
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd',
  },
  main: {
    paddingVertical: rem(15),
    flexDirection: 'row',
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd',
  },
  mainText: {
    flex: 1,
    paddingLeft: rem(50),
  },
  mainImg: {
    width: rem(225),
    height: rem(90),
    marginRight: rem(20),
  },
  mainTitle: {
    lineHeight: rem(50),
    fontSize: rem(38),
    color: '#fb7f66',
    fontWeight: 'bold',
  },
  mainSubTitle: {
    lineHeight: rem(38),
    fontSize: rem(24),
    color: '#6c6c6c',
  },
  active: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default HomeActive;