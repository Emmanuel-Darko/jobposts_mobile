import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/constants'

const Welcome = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcome_header}>Hello Kode</Text>
            <Text style={styles.welcome_subHeader}>Land your perfect Job</Text>
        </View>
        <View>
            <View>
                <TextInput 
                    style={styles.searchInput}
                    value=''
                    onChange={() => {}}
                    placeholder='Key in your search'
                />
            </View>
        </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    welcome_header: {
        fontSize: 15,
        fontWeight: 400
    },
    welcome_subHeader: {
        fontSize: 18,
        fontWeight: 500,
    },
    searchInput: {
        backgroundColor: COLORS.lightWhite,
        borderWidth: 0.8,
        borderColor: '#88cc00',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        opacity: 0.8
    }
})