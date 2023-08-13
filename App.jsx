import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Splash from './views/Splash'
import Home from './views/Home'
import Auth from './views/Auth'


const App = () => {
    const [splash, setSplash] = useState(true)
    
    useEffect(()=> {
        setTimeout(()=> {
            setSplash(false)
        }, 3000)
    }, [])
    
  return (
    <View>
    {
      // splash ? <Splash /> : <Home />
    }
    <Auth />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})