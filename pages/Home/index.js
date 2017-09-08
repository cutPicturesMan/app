import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

import HomeHeader from './HomeHeader.js';
import HomeCategory from './HomeCategory.js';
import HomeRecommend from './HomeRecommend.js';
import HomeActive from './HomeActive.js';
import HomeShopCenter from "./HomeShopCenter";
import HomeHot from "./HomeHot";
import HomeGuessYouLike from "./HomeGuessYouLike";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HomeHeader></HomeHeader>
  })

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <ScrollView>
          <HomeCategory></HomeCategory>
          <HomeRecommend></HomeRecommend>
          <HomeActive></HomeActive>
          <HomeShopCenter></HomeShopCenter>
          <HomeHot></HomeHot>
        </ScrollView>
        <HomeGuessYouLike></HomeGuessYouLike>
      </View>
    )
  }
}

export default HomeScreen;