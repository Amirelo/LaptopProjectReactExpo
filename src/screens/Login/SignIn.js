import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from '../../assets/images';
import customStyle from '../../assets/stylesheets/customStyle';
import { CustomButton, CustomImage, CustomInput, CustomText } from '../../components';

const Signin = ({navigation}) => {
    const onToForgotPasswordPress = () =>{
        navigation.navigate("Verification", {paramKey: 'changepassword'});
    }

    const onSignInPress = ()=> {
    console.warn("Signing in");
    }

    const onToSignUpPress = ()=> {
        navigation.navigate("Verification", {paramKey:'signup'});
    }

    const onSocialButtonPress = () =>{
        console.warn("Social button");
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomImage imageLink={images.app_logo} type={'header'} marginTop={103} />
                <CustomText value={"Welcome to computer store"} fontSize={'title'} marginTop={12}/>
                <CustomText value={"Sign In to continue"} fontSize={'normal'}  textColor={'text_sub'}  marginTop={2}/>
                <CustomInput imageLink={images.ic_person} placeholder={"Username"} marginTop={50} />
                <CustomInput imageLink={images.ic_password} placeholder={"Password"} type={'password'} isSecure={true} marginTop={8} />
                <CustomButton value={'Forgot password?'} type={'tertiary'} onPress={onToForgotPasswordPress} marginTop={16} float={'flex-end'} />
                <CustomButton value={"Sign In"} type={'primary'} onPress={onSignInPress} marginTop={16} buttonbackground={"submit"}/>
                <CustomText value={"Or Sign In with"} fontSize={'subtitle'} marginTop={18} />
                <CustomButton value={'Google'} type={'social'} onPress={onSocialButtonPress} marginTop={16} imageLink={images.ic_google} />
                <CustomButton value={'Facebook'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_facebook} />
                <CustomButton value={'Apple'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_apple} />
                <CustomButton value={"Don't have an account? Sign Up here"} onPress={onToSignUpPress} type={'tertiary'} marginTop={24}/>
            </SafeAreaView>
        </ScrollView>

    )
}

export default Signin

const styles = StyleSheet.create({

})