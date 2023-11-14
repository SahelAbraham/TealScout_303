import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'

import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobs = [{jobName: "Stand Scouter", jobDescription: "Record match data from the stands for the team you are assigned to, then present the resultant QR code to Stand Scout Admin"},
              {jobName: "Stand Scouter Admin", jobDescription: "Upload data recored from stand scouters to the pit computer via USB cable"},
              {jobName: "Pit Scouter", jobDescription: "Record pit scouting data from the teams you are assigned to, then upload the data via USB cable to the pit computer"}]

const Welcome = () => {
  const router = useRouter();


  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.BigTeal}> Welcome to TealAlliance </Text>
        <Text style = {styles.whiteText}> Select Your Current Role </Text>
      </View>

      <View style = {styles.tabsContainer}>
        <FlatList 
          data = {jobs}
          renderItem = {({ item }) => (
            <TouchableOpacity
            style = {[styles.tab(item), {marginBottom: SIZES.small}]}
            onPress = {() => {
              router.push('/search/${item}')
            }}
            >
              <Text style = {styles.tabText(item)}>{item.jobName}</Text>
              <Text style = {styles.descriptionText}>{item.jobDescription}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {item => item}
          contentContainerStyle = {{columnGap: SIZES.small}}
        />
      </View>

    </View>
  )
}

export default Welcome