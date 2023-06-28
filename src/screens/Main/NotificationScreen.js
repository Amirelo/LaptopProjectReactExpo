import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomButton, CustomNotification, CustomText } from '../../components'

const NotificationScreen = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
    <SafeAreaView style={[customStyle.container]}>
    <Text style={styles.textHeader}>Mark all as read</Text>
      <CustomNotification/>
    </SafeAreaView>
    </ScrollView>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  textHeader:{
    color: '#02A9F7',
    width:'90%',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf:'flex-end',
    
}
})