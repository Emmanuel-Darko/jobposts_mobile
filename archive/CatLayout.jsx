import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './ButtonLayout'

const CatLayout = ({ catName, hungryState }) => {
  const [isHungry, setHungry] = useState(hungryState)    
  return (
    <View>
        <Text>{catName}</Text>
        <Button isHungry={isHungry} setHungry={setHungry} />
    </View>
  )
}

export default CatLayout

const styles = StyleSheet.create({})