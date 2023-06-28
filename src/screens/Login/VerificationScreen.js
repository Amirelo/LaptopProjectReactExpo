import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../assets/images'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomButton, CustomImage, CustomInput, CustomText } from '../../components'

const VerificationScreen = ({navigation, route}) => {
  const [verifyCode,setVerifyCode] = useState();

  const onSendPress = () => {
    setVerifyCode(123)
  }

  const onVerifyPress = () =>{
    const {paramKey} = route.params;
    paramKey == "changepassword" ?
    navigation.navigate('Forgot password')
    :
    navigation.navigate('Sign Up');
  }

  const onToSignInPress = () => {
    navigation.navigate("Sign In");
  }

  const onSocialButtonPress = () =>{
    console.warn("Social button");
}
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
     { verifyCode== null ?
    <SafeAreaView style={customStyle.container}>
            <CustomInput imageLink={images.ic_email} placeholder={"Email"} marginTop={103} />
            <CustomText value={"We will send a verification code to your email"} fontSize={`normal`} textColor={`text_sub`}  marginTop={8} />
            <CustomButton value={"Send"} type={'primary'} onPress={onSendPress} marginTop={261} />
            <CustomText value={"Or Sign Up with"} marginTop={18} />
            <CustomButton value={'Google'} type={'social'} onPress={onSocialButtonPress} marginTop={16} imageLink={images.ic_google} />
            <CustomButton value={'Facebook'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_facebook} />
            <CustomButton value={'Apple'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_apple} />

            <CustomButton value={"Already have an account? Sign In here"} onPress={onToSignInPress} type={'tertiary'} marginTop={24}/>

        </SafeAreaView>
        :
        <SafeAreaView style={customStyle.container}>
            <CustomInput imageLink={images.ic_verification} placeholder={"Verification code"} marginTop={103} />
            <CustomImage imageLink={images.ic_timer} type={'header'} marginTop={32}/>
            <CustomText value={"Please verify before the timer expire"} type={'title1'} marginTop={12}/>
            <CustomButton value={'Resend verification code'} type={'tertiary'} marginTop={52} float={'flex-end'}/>
            <CustomButton value={"Send"} onPress={onVerifyPress} type={'primary'} marginTop={16} />
            
        </SafeAreaView>}
        </ScrollView>
  )
}

export default VerificationScreen

const styles = StyleSheet.create({})