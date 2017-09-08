import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { rem, wWidth } from '../../js/utils/rem';

class HomeShopCenter extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemMain}>
          <Image source={{ uri: this.props.img }} style={styles.itemImg}></Image>
          <Text style={styles.itemInfo}>{this.props.info}</Text>
        </View>
        <Text style={styles.itemName}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: rem(20),
    borderTopWidth: rem(1),
    borderBottomWidth: rem(1),
    borderColor: '#ddd',
  },
  item: {
    padding: rem(20)
  },
  itemName: {
    fontSize: rem(26),
    marginTop: rem(23)
  },
  itemImg: {
    width: rem(200),
    height: rem(150),
    borderRadius: rem(4),
  },
  itemInfo: {
    lineHeight: rem(28),
    paddingHorizontal: rem(3),
    backgroundColor:'#ffa500',
    color: '#fff',
    fontSize: rem(20),
    position: 'absolute',
    bottom: rem(20),
    left: 0,
  }
})

export default HomeShopCenter;