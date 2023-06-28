import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../assets/images'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomButton, CustomImage, CustomText } from '../../components'

const FailureScreen = ({navigation}) => {

  const onTakeMeBackPress = () =>{
    navigation.navigate("Sign In");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomImage imageLink={images.ic_fail} type={'header'} marginTop={103}/>
                <CustomText value={"Uh oh"} type={'header_fail'} marginTop={30}/>
                <CustomText value={"We are very sorry for this inconvenience, please check your internet connection"} type={'subheader_fail'} marginTop={50}/>
                <CustomButton value={"Take me back"} onPress={onTakeMeBackPress} type={'primary'} marginTop={116}/>
            </SafeAreaView>
        </ScrollView>
  )
}

export default FailureScreen

const styles = StyleSheet.create({})