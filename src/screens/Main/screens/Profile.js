import { StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AccountTab, CustomButton, CustomImage, CustomImageButton } from '../../../components'
import * as images from '../../../assets/images'
import { UserContext } from '../../Login/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({route}) => {
  const {userInfo} = route.params;

  return (
    <SafeAreaView style={customStyle.container}>
      <CustomImageButton imageLink={userInfo.imageLink} linkType={'uri'} type={'logo'} customStyles={styles.userImage}/>

      <AccountTab type={'profile'} title={"Username"} subtitle={userInfo.username}/>
      <AccountTab type={'profile'} title={"Email"} subtitle={userInfo.email}/>
      <AccountTab type={'profile'} title={"Phone number"} subtitle={userInfo.phonenumber}/>
      <AccountTab type={'profile'} title={"Birthday"} subtitle={userInfo.birthday}/>
      <AccountTab type={'profile'} title={"Gender"} subtitle={userInfo.gender}/>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})