import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CatLayout from './CatLayout'

const Cafe = () => {
  return (
    <View style={styles.container}>
      <Text>Kode's Cafe...</Text>
      <CatLayout catName={'Kittie'} isHungry={true}/>
      <CatLayout catName={'Champ'} isHungry={false} />
    </View>
  )
}

export default Cafe

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        columnGap: 100
    }
})