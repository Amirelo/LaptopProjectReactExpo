import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import customStyle from '../../assets/stylesheets/customStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, CustomImage, CustomImageButton } from '../../components'
import * as images from '../../assets/images'

const Profile = () => {
  return (
    <SafeAreaView style={customStyle.container}>
      <CustomImageButton imageLink={images.userImage} type={'header'} />
      
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})