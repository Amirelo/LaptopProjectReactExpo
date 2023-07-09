import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomImage, CustomInput, CustomText } from '../../../components'
import { UserContext } from '../UserContext'


const VerificationScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [receivedCode, setReceivedCode] = useState();
  const [error, setError] = useState();

  const { onSendVerificationCode, onCheckEmail } = useContext(UserContext);
  const { paramKey } = route.params;

  const onSendPress = async () => {
    checkEmailResult = await onCheckEmail(email, paramKey);

    if (checkEmailResult.response_code == 1) {
      result2 = await onSendVerificationCode(email);
      setReceivedCode(result2.data);
      if (result2.response_code == 1) {
        setTimeout(() => {
          setReceivedCode()
        }, 60000);
      }
    } else {
      setError(checkEmailResult.message);
    }


  }

  const onVerifyPress = () => {
    if (verificationCode == receivedCode) {
      switch (paramKey) {
        case "CHANGEPASSWORD":
          navigation.navigate('Forgot password', { email: email, type: "PASSWORD" });
          break;
        case "SIGNUP":
          navigation.navigate('Sign Up', { email: email });
          break;
        default:
          setError("Invalid navigation");
      }
    } else {
      setError("Invalid verification code");
    }
  }

  const onToSignInPress = () => {
    navigation.navigate("Sign In");
  }

  const onSocialButtonPress = () => {
    console.warn("Social button");
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      {receivedCode == null ?
        <SafeAreaView style={customStyle.container}>
          <CustomInput imageLink={images.ic_email} placeholder={"Email"} marginTop={103} onChangeText={setEmail} />
          <CustomText value={"We will send a verification code to your email"} fontSize={`normal`} textColor={`text_sub`} marginTop={8} />
          {error != null ?
            <CustomText value={error} fontSize={'normal'} textColor={"cancel"} />
            :
            <></>}
          <CustomButton value={"Send"} type={'primary'} onPress={onSendPress} marginTop={261} />
          <CustomText value={"Or Sign Up with"} marginTop={18} />
          <CustomButton value={'Google'} type={'social'} onPress={onSocialButtonPress} marginTop={16} imageLink={images.ic_google} />
          <CustomButton value={'Facebook'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_facebook} />
          <CustomButton value={'Apple'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_apple} />

          <CustomButton value={"Already have an account? Sign In here"} onPress={onToSignInPress} type={'tertiary'} marginTop={24} />

        </SafeAreaView>
        :
        <SafeAreaView style={customStyle.container}>
          <CustomInput imageLink={images.ic_verification} placeholder={"Verification code"} marginTop={103} onChangeText={setVerificationCode} />
          <CustomImage imageLink={images.ic_timer} type={'header'} marginTop={32} />
          <CustomText value={"Please verify before the timer expire"} type={'title1'} marginTop={12} />
          <CustomButton value={'Resend verification code'} type={'tertiary'} marginTop={52} float={'flex-end'} onPress={onSendPress} />
          <CustomButton value={"Verify"} onPress={onVerifyPress} type={'primary'} marginTop={16} />

        </SafeAreaView>}
    </ScrollView>
  )
}

export default VerificationScreen

const styles = StyleSheet.create({})