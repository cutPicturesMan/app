import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class MoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'recent' })}
          title="sub screen"
        />
      </View>
    )
  }
}

export default MoreScreen;