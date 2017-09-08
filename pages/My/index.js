import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class MyScreen extends React.Component {
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

export default MyScreen;

