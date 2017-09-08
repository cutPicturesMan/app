import React from 'react';
import HomeScreen from './pages/Home';
import ShoperScreen from './pages/Shoper/index';
import MyScreen from './pages/My/index';
import MoreScreen from './pages/More/index';
import {
  AppRegistry,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

const TabScreen = TabNavigator({
  首页: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        var icon = focused ? {uri: 'icon_home_selected'} : {uri: 'icon_home'};

        return (
          <Image
            source={icon}
            style={styles.icon}
          />
        );
      }
    }),
  },
  商家: {
    screen: ShoperScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        var icon = focused ? {uri: 'icon_shoper_selected'}: {uri: 'icon_shoper'};

        return (
          <Image
            source={icon}
            style={[styles.icon]}
          />
        );
      }
    }),
  },
  我的: {
    screen: MyScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        var icon = focused ? {uri: 'icon_my_selected'} : {uri: 'icon_my'};

        return (
          <Image
            source={icon}
            style={[styles.icon]}
          />
        );
      }
    }),
  },
  更多: {
    screen: MoreScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        var icon = focused ? {uri: 'icon_more_selected'} : {uri: 'icon_more'};

        return (
          <Image
            source={icon}
            style={[styles.icon]}
          />
        );
      }
    }),
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#ef6100',
    style: {
      backgroundColor: '#f8f8f8'
    },
  },
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#ff6100'
    },
  },
});

const styles = StyleSheet.create({
  // tabContainer: {
  //   marginTop: Platform.OS === 'ios' ? 20 : 0
  // },
  icon: {
    width: 26,
    height: 26
  }
});

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let { state, setParams } = navigation;
    let isInfo = state.params.mode === 'info';
    let user = state.params.user;

    return {
      title: isInfo ? `${user} info` : `chat with ${user}`,
      headerRight: (
        <Button
          title={isInfo ? 'done' : 'info'}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}/>
      )
    };
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

// Home: {screen: HomeScreen},
// Home: {screen: MainScreenNavigator},
const
  SimpleApp = StackNavigator({
    Home: {
      screen: TabScreen
    },
    Chat: { screen: ChatScreen },
  },
  //   {
  //   // mode: 'modal',
  //   headerMode: 'screen',
  // }
);

AppRegistry
  .registerComponent('app', () => SimpleApp);