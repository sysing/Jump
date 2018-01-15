import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import Header from './app/components/Header';

export default class App extends React.Component{
  render() {
    return (
      <ScrollView style = {styles.container}>
        <Header />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  }
});
