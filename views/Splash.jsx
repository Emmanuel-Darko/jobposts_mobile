import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image 
                    source={require('../assets/job_logo.png')}
                    style={styles.job_logo}
                />
                <Text style={styles.title}>Job Posts</Text>
            </View>
            <View style={styles.image_container}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.maxim_logo}
                />
            </View>
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%', 
    },
    main: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 20,
        height: '55%'
    },
    job_logo: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#88CC00'
    },
    image_container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '45%',
        width: '100%',
    },
    maxim_logo: {
        width: 150,
        height: 50,
    }
})