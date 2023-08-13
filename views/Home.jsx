import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { COLORS, SIZES } from '../assets/constants'
import Header from '../components/Header'
import WelcomeSearch from '../components/Card'
import JobPosts from '../components/JobPosts'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}/>
      <ScrollView contentContainerStyle={styles.main} showsVerticalScrollIndicator={false}>
        <View style={styles.scrollWrapper}>
          <WelcomeSearch type={'search'} />
          <JobPosts />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.lightWhite,
    height: '100%',
  },
  header:{
    // display: 'none'
  },
  main:{
    minHeight: '100%',
  },
  scrollWrapper: {
    flex: 1,
    // padding: SIZES.medium
    display: 'flex',
    alignItems: 'center',
    minHeight: '100%',
    paddingVertical: 30,
    gap: 20
  }
})