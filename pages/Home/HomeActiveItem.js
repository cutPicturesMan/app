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

  render = () => {
    return (
      <TouchableOpacity style={[styles.container, this.props.styleSheet]}>
        <View style={styles.text}>
          <Text style={[styles.title, {color: this.props.color}]}>
            {this.props.title}
          </Text>
          <Text style={styles.subTitle}>{this.props.subTitle}</Text>
        </View>
        <Image source={{uri: this.props.img}} style={styles.img}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: rem(15),
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    paddingLeft: rem(40),
  },
  title: {
    lineHeight: rem(44),
    fontSize: rem(28),
    fontWeight: 'bold',
  },
  subTitle: {
    lineHeight: rem(38),
    fontSize: rem(24),
    color: '#6c6c6c',
  },
  img: {
    width: rem(130),
    height: rem(85)
  },
})

export default HomeActiveItem;