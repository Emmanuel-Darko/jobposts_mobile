import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/constants'

const JobTile = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text> { item.jobTitle } </Text>
        <View style={styles.details}>
            <Text> { item.jobLocation } </Text>
            <Text> { item.jobExperince } </Text>
        </View>
    </TouchableOpacity>
  )
}

export default JobTile

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 2,
        padding: 10
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
})