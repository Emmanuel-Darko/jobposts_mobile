import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({isHungry, setHungry}) => {
  return (
    <TouchableOpacity 
      onPress={() => setHungry(!isHungry)}
      style={isHungry ? {backgroundColor: 'red'} : {backgroundColor:'green'}}
    >
      {
        isHungry ? <Text style={{color:'#fff'}}> I am Hungry' </Text> : <Text style={{color:'#fff'}}> I am Full </Text>
      } 
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})