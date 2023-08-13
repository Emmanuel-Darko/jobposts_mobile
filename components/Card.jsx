import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../assets/constants'
import Pills from './Pills'

const Card = ({type}) => {
  const [isSearch, setSearch] = useState(false)
  const CardSearch = () => {
    const jobTypes = [
        {name: 'Full-time', link: ''},
        {name: 'Part-time', link: ''},
        {name: 'Contract', link: ''},
        {name: 'Part-time', link: ''},
        {name: 'Contract', link: ''},
        {name: 'Part-time', link: ''},
        {name: 'Contract', link: ''},
        {name: 'Remote', link: ''}
    ]

    return(
        <KeyboardAvoidingView style={styles.card}>
            <TouchableOpacity style={styles.close}>
                <AntDesign name="close" color="#fff" />
            </TouchableOpacity>
            <Text style={styles.search_header}>Hello ...</Text>
            <Text style={styles.search_subHeader}>
                { isSearch ? 'Search titles, locations, salary' : 'Find your perfect job' }
            </Text>
            {
                isSearch ?
                    <View style ={styles.search_box}>
                        <TextInput
                            style={styles.text_input} 
                            placeholder='Search here...'
                            autoFocus
                        />
                        <TouchableOpacity style={styles.inner_search}>
                            <AntDesign name="search1" size={20} color="#88cc00" />
                        </TouchableOpacity>
                    </View>
                :
                    <TouchableOpacity style={styles.searchBtn} onPress={() => setSearch(true)}>
                        <Text style={styles.search_text}>Search</Text>
                        <AntDesign name="search1" size={15} color="#fff"></AntDesign>
                    </TouchableOpacity>
            }
            {
                isSearch &&
                <FlatList
                    horizontal
                    contentContainerStyle={styles.pillsContainer}
                    data={jobTypes}
                    renderItem={({item, index}) => <Pills name={item.name} index={index} />}
                />
            }
        </KeyboardAvoidingView>
    )
  }  

    return (
        type == 'search' ?
            <CardSearch />
        :
            <View style={styles.card}>
                <Text>Card</Text>
            </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        height: 200,
        width: '90%',
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        elevation: 10,
    },
    close:{
        backgroundColor: 'grey',
        padding: 5,
        borderRadius: 50,
        position: 'absolute',
        right: 0,
        top: 0,
        margin: 10
    },
    search_header: {
        fontSize: 20,
        fontWeight: 500
    },
    search_subHeader: {
        fontSize: 15,
        fontWeight: 500
    },
    search_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: '#88cc00',
        borderRadius: 15,
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    search_text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    text_input: {
        backgroundColor: '#f1f1f1',
        borderWidth: 0.8,
        borderColor: '#88cc00',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 3,
        paddingRight: 40,
        borderRadius: 15,
    },
    inner_search: {
        position: 'absolute',
        right: 4,
        padding: 10,
        // borderWidth: 1,
        color: '#88cc00'
    },
    pillsContainer: {
        gap: 10,
        paddingTop: 15
    }
})