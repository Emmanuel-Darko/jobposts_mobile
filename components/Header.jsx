import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <View style={styles.header}>
      <Button iconUrl="menu-fold" type="menu"/>
      <Text style={styles.header_text}>Job Posts</Text>
      <Button iconUrl="user" type="user"/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    header_text:{
      fontWeight: 800,
      fontSize: 18,
      color: '#666'
    }
})