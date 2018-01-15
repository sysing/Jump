import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

export default class Banner extends React.Component{
  render() {
    return (
      <Image source= {require('../img/banner.png')}
        style={styles.banner}/>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 80,
    alignItems:'center',
    justifyContent:'center',
  }
});
