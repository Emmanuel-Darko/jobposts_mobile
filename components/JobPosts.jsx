import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import axios from 'axios'
import JobTile from './JobTile'



const JobPosts = () => {
    const [jobs, setJobs] = useState([])
    const getJobs = async() => {
        try{
            const jobs = await axios.get('http://192.168.1.98:3000/jobs')
            setJobs(jobs.data)
        }catch(e){
            console.log(e)
        }
        
    }

    useEffect(() => {
      getJobs()

      return () => {
        setJobs([])
      }
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.head_text}>Available Jobs</Text>
            <ScrollView horizontal contentContainerStyle={{width: '100%'}}>
                <FlatList 
                    contentContainerStyle={styles.jobsContainer}
                    data={jobs}
                    keyExtractor={(item, index) => item + index + Math.random()}
                    renderItem={({item, index}) => (
                        <JobTile item={item} keyE/>
                    )}
                />
            </ScrollView>
        </View>
    )
}

export default JobPosts

const styles = StyleSheet.create({
    container: {
        width: '90%'
    },
    jobsContainer: {
        width: '100%',
        // borderWidth: 1,
        gap: 20
    },
    head_text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#88cc00'
    }
})