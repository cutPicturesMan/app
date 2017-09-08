import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {rem} from '../../js/utils/rem';

class HomeHeader extends Component{
  render () {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={{ color: '#fff', fontSize: rem(28) }}>广州</Text>
        </View>
        <View style={styles.headerTitle}>
          <Text style={{ color: '#ccc' }}>输入商家、品类、商圈1</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={{uri: 'icon_homepage_message'}}
            style={styles.headerIcon}/>
          <Image
            source={{uri: 'icon_homepage_scan'}}
            style={styles.headerIcon}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerIcon: {
    width: rem(48),
    height: rem(48),
    margin: rem(10)
  },
  headerLeft: {
    paddingHorizontal: rem(10),
  },
  headerTitle: {
    width: rem(525),
    height: rem(60),
    borderRadius: rem(30),
    paddingHorizontal: rem(10),
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row'
  }
});

export default HomeHeader;