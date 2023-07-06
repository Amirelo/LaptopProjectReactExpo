import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomImage, CustomText } from '../../../components'

const DeactivatedAuthScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomImage imageLink={images.ic_deactivate} type={'header'} marginTop={103}/>
                <CustomText value={"Your account has been deactivated due to violating our policy"} type={'header_fail'} marginTop={30}/>
                <CustomText value={"Reason: Order payment not resolved"} type={'subheader_fail'} marginTop={50}/>
                <CustomText value={"If you disagree with this decision, you can send an appeal to this email: admin@gmail.com"} type={'subtitle'} marginTop={75}/>
                <CustomButton value={"Take me back"} type={'primary'} marginTop={30}/>
            </SafeAreaView>
        </ScrollView>
  )
}

export default DeactivatedAuthScreen

const styles = StyleSheet.create({})