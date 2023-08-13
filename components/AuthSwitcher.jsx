import React,{ useEffect, useRef, useState } from 'react'
import { Animated, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity } from 'react-native'

const AuthSwitcher = () => {
    const [switchBtn, setSwitch] = useState({
        text: 'Login', position: '0%'
    })
    const moveAnim = useRef(new Animated.Value(0)).current
    const setLogin = () => {
        setSwitch({text: 'Login'})
        Animated.timing(moveAnim, {
            toValue: '0%',
            duration: 10000,
            useNativeDriver: true
        }).start()
    }
    const setRegister = () => {
        setSwitch({text: 'Register'})
        Animated.timing(moveAnim, {
            toValue: '-50%',
            duration: 10000,
            useNativeDriver: true
        }).start()
    }

    return (
        <KeyboardAvoidingView style={styles.btnContainer}>
            <Animated.View to id='switcher' 
                style={[styles.button, styles.switcher, switchBtn.text == 'Login' ? styles.login : styles.register]}
            >
                <Text style={[styles.btnText, styles.switcherText]}>{switchBtn.text}</Text>
            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={() => setLogin()}>
                <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setRegister()}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default AuthSwitcher

const styles = StyleSheet.create({
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f1f1f1',
        width: '80%',
        borderWidth: 0.7,
        borderColor: '#88cc00',
        // elevation: 5,
        position: 'relative',
        // borderRadius: 10
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'50%',
        paddingVertical: 10,
        paddingHorizontal: 15
        // borderRadius: 10,
        // borderTopRightRadius:
    },
    btnText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#88cc00'
    },
    switcher: {
        backgroundColor: '#88cc00',
        position: 'absolute',
        zIndex: 1,
        right: 0,
    },
    switcherText: {
        color: '#fff'
    },
    login: {left: '0%'},
    register: {left: '50%'},
})