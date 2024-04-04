import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text style={styles.homeConatiner}>Home Page coming soon ...</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 100
  }
})