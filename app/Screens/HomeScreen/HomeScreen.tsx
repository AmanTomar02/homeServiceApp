import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';

export default function HomeScreen() {
  return (

    <View style={styles.container}>

      <Header />

      <View style={{ padding: 20 }}>
        <Slider />
        <Categories />
        <BusinessList />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});