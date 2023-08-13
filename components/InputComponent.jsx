import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputComponent = ({placeholder}) => {
  return (
    <TextInput style={styles.container} placeholder={placeholder}/>
  )
}

export default InputComponent

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1
    }
})