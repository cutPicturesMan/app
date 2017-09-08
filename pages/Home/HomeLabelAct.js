import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { rem, wWidth } from '../../js/utils/rem';

class HomeActiveItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.styleSheet]}>
        <Image source={{ uri: this.props.img }} style={styles.icon}></Image>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.sub}>{this.props.sub}</Text>
        <Image source={{ uri: 'icon_arrow_right' }} style={styles.arrow}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: rem(87),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: rem(45),
    height: rem(45),
    marginLeft: rem(12),
  },
  title: {
    fontSize: rem(30),
    marginLeft: rem(12),
    flex: 1,
  },
  sub: {
    color: '#666',
    fontSize: rem(28),
    marginRight: rem(15),
  },
  arrow: {
    width: rem(16),
    height: rem(26),
    marginRight: rem(18),
  }
})

export default HomeActiveItem;