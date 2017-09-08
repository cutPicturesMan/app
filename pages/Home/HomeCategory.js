import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { rem, scale, wWidth } from '../../js/utils/rem';


class HomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      data: []
    }
  }

  componentDidMount = () => {
    let data = require('../../Api/HomeCategory.json');
    this.setState({
      data
    })
  }

  // 改变分页页码
  changePage = (e) => {
    let page = Math.floor(e.nativeEvent.contentOffset.x / wWidth);
    this.setState((prevState) => {
      if (page !== prevState.page) {
        return { page }
      }
    });
  }

  // 分类
  renderCategory() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={this.changePage}
        style={styles.category}>
        {this.renderCategorySection()}
      </ScrollView>
    );
  }

  // 分类每一屏
  renderCategorySection = () => {
    let data = this.state.data;
    // 分类每一屏
    let sections = [];
    let pages = Math.ceil(data.length / 10);

    // 全部分类数组
    let els = data.map((item, index) => (
      <TouchableOpacity key={item.title} style={styles.categoryItem}>
        <Image source={{ uri: item.icon }} style={styles.categoryIcon}/>
        {/*<Image source={item.icon} style={styles.categoryIcon}/>*/}
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </TouchableOpacity>
    ));

    // 每一屏显示10个条目
    for (let i = 0; i < pages; i++) {
      let start = i * 10;
      let end = (i + 1) * 10;
      // 如果结束位置超出了数组的长度，则设置为数组的长度
      (end > data.length) && (end = data.length);
      let items = els.slice(start, end);

      sections.push(
        <View key={i} style={styles.categorySection}>
          {items}
        </View>
      )
    }

    return sections;
  }

  // 指示器
  renderIndicator = () => {
    let data = this.state.data;
    let els = [];
    let pages = Math.ceil(data.length / 10);

    for (let i = 0; i < pages; i++) {
      let active = i === this.state.page ? styles.indicatorItemActive : '';

      els.push((
        <View
          key={i}
          style={[styles.indicatorItem, active]}></View>
      ));
    }

    return (
      <View style={styles.indicator}>
        {els}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCategory()}
        {this.renderIndicator()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: rem(20),
    borderBottomWidth: 1 / scale,
    borderColor: '#ddd'
  },
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categorySection: {
    width: wWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem: {
    width: wWidth / 5,
    paddingBottom: rem(20),
    alignItems: 'center'
  },
  categoryIcon: {
    width: rem(104),
    height: rem(104)
  },
  categoryTitle: {
    fontSize: rem(24),
    color: '#999'
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  indicatorItem: {
    width: rem(12),
    height: rem(12),
    margin: rem(4),
    backgroundColor: '#979797',
    borderRadius: rem(12)
  },
  indicatorItemActive: {
    backgroundColor: '#fd4b1f',
  }
})

export default HomeCategory;