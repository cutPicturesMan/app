import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import HomeLabelAct from './HomeLabelAct.js';
import { rem, scale, wWidth } from '../../js/utils/rem';

class HomeGuessYouLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount = () => {
    this.getData();

  }

  getData = () => {
    let list = require('../../Api/HomeGuessYouLike.json');

    this.setState({
      list
    })
  }

  keyExtractor = (item, index) => item.title;

  renderHeader() {
    return (
      <HomeLabelAct
        title="猜你喜欢"
        img="icon_like"
        styleSheet={styles.bb}></HomeLabelAct>
    )
  }

  // 每个商家
  renderItem({ item, index }) {
    return (
      <TouchableOpacity style={[styles.item, styles.bb]}>
        <Image source={{ uri: item.img }} style={styles.itemImg}></Image>
        <View style={styles.itemContent}>
          <View style={styles.line}>
            <Text style={[styles.title, styles.lineLeft]}>{item.title}</Text>
            <Text style={[styles.distance, styles.lineRight]}>>{item.distance}</Text>
          </View>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <View style={[styles.line, { marginTop: rem(26) }]}>
            <View style={[styles.lineLeft, styles.priceContainer]}>
              <Text style={styles.price}>¥{item.price}</Text>
              <Text style={styles.oldPrice}>¥{item.old_price}</Text>
            </View>
            <Text style={[styles.sell, styles.lineRight]}>已售{item.sell}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onRefresh() {
    console.log('refresh');
  }

  onEndReached = () => {
    console.log('end');
    // this.setState((prevState)=>{
    //   return prevState.list.concat(prevState.list);
    // });
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.list}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={this.renderHeader}
          refreshing={false}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.1}
          renderItem={this.renderItem}></FlatList>
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
  item: {
    paddingVertical: rem(20),
    flexDirection: 'row',
  },
  itemImg: {
    width: rem(195),
    height: rem(165),
    borderRadius: rem(7),
    marginLeft: rem(20)
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lineLeft: {
    flex: 1
  },
  itemContent: {
    flex: 1,
    marginLeft: rem(20),
    marginRight: rem(50)
  },
  title: {
    fontSize: rem(34),
    paddingTop: rem(2),
  },
  distance: {
    fontSize: rem(24),
    color: '#999'
  },
  subTitle: {
    fontSize: rem(24),
    color: '#999',
    marginTop: rem(20),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    fontSize: rem(30),
    color: '#fd4b1f'
  },
  oldPrice: {
    fontSize: rem(24),
    color: '#999',
    marginLeft: rem(10),
    textDecorationLine: 'line-through'
  },
  sell: {
    fontSize: rem(26),
    color: '#666'
  }
})

export default HomeGuessYouLike;