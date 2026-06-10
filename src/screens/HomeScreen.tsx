import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs,s} from 'react-native-size-matters'
import TopTabs from '../components/TopTabs'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Meditations</Text>
      <Text style={styles.subTitleText}>Lorem Ipsum is simply dummy text</Text>
      <TopTabs/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    paddingTop:vs(50),
    paddingHorizontal:s(16),
  },
  titleText:{
    fontWeight:'semibold',
    fontSize:s(20),
    color:"#1D150F",
    marginBottom:vs(6)
  },
  subTitleText:{
    fontWeight:400,
    fontSize:s(14),
    color:"#2C2016",
    marginBottom:vs(16)
  }
})