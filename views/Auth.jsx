import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import AuthSwitcher from '../components/AuthSwitcher'
import InputComponent from '../components/InputComponent'

const Auth = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{width: 150, height: 40}} source={require('../assets/logo.png')}/>
            </View>
            <AuthSwitcher />
            <KeyboardAvoidingView style={styles.card}>
                <InputComponent placeholder={'Email'}/>
                <InputComponent placeholder={'Password'}/>
                <InputComponent placeholder={'Confirm Password'}/>
            </KeyboardAvoidingView>
            <TouchableOpacity><Text>Login</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 40,
        height: '100%',
        paddingTop: 40,
        backgroundColor: '#f1f1f1'
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
    },
    card: {
        backgroundColor: '#fff',
        width: '90%',
        height: '50%',
        // borderRadius: 20,
        elevation: 10
    },
})