import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Button = ({iconUrl, type}) => {
  return (
    <TouchableOpacity
      style={type=='menu' ? styles.btn_menu : styles.btn_user}
    >
      <AntDesign name={iconUrl} size={20} color="#88CC00" />
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn_menu:{
      backgroundColor: 'grey',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5
    },
    btn_user:{
      backgroundColor: 'grey',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 50
    },
    image: {
      width: '100%'
    }
})