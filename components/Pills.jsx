import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Pills = ({ name }) => {
  const [selected, setSelected] = useState(false)
  const handleSelected = () => {
    setSelected(true)
  }

  return (
    <KeyboardAvoidingView>
      <TouchableOpacity 
        onPress={() => handleSelected}
        style={styles.container}
      >
        <Text style={styles.pillText}> {name} </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Pills

const styles = StyleSheet.create({
    container: {
      // borderWidth: 1,
      // borderColor: '#88cc00',
      alignSelf: 'flex-start',
    },
    pillText: {
      alignSelf: 'flex-start',
      padding: 3,
      borderWidth: 0.5,
      borderColor: '#88cc00',
      borderRadius: 10,
    },
    active: {
      color: '#fff',
      backgroundColor: '#88cc00',
      borderWidth: 0
    }
})