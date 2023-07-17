import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from '../../../assets/images';
import customStyle from '../../../assets/stylesheets/customStyle';
import { CustomButton, CustomImage, CustomInput, CustomText } from '../../../components';
import { UserContext } from '../UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google'
import { checkEmail } from '../UserService';

const Signin = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "731408095021-aoa0uq7ab734fmuu8p4lchr00q3pmd8c.apps.googleusercontent.com",
        expoClientId: "731408095021-04o5jvpdrehid78kqq417fttm342rqkd.apps.googleusercontent.com",
        iosClientId: "731408095021-pqlahdfknpllub5vmktctm81f6ldneo8.apps.googleusercontent.com"
    })
    //DuAnApp://expo-development-client/?url=https://u.expo.dev/490f9463-d5f1-4420-a95f-c7707fe80f1c?channel-name=trandang210799

    const { onSignIn, checkSaveUser,onGoogleSignIn } = useContext(UserContext);
    const getUserInfo = async () => {
        try {
            const respone = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${response.authentication.accessToken}` },

                }
            );
            const user = await respone.json();
            checkEmailResult = await checkEmail(user.email, "SIGNUP");
            if (checkEmailResult.data.response_code == 0) {
                await AsyncStorage.setItem('email', user.email);
                onGoogleSignIn();
            } else {
                navigation.navigate("Sign Up", {email: user.email, userData: user })
            }

        } catch (error) {
            console.warn(error)
        }
    }

    

    useEffect(() => {
        checkSaveUser();
    })

    useEffect(()=>{
        getUserInfo()
    },[response])


    const onToForgotPasswordPress = () => {
        navigation.navigate("Verification", { paramKey: 'CHANGEPASSWORD' });
    }

    const onSignInPress = async () => {
        const result = await onSignIn(username, password);
        if (result.response_code == 1) {
            setError(false);
            await AsyncStorage.setItem("email", result.data.email)
        }
        else {
            setError(true);
        }
    }

    const onToSignUpPress = () => {
        navigation.navigate("Verification", { paramKey: 'SIGNUP' });
    }

    const onSocialButtonPress = () => {
        console.warn("Social button");
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomImage imageLink={images.app_logo} type={'header'} marginTop={103} />
                <CustomText value={"Welcome to computer store"} fontSize={'title'} marginTop={12} />
                <CustomText value={"Sign In to continue"} fontSize={'normal'} textColor={'text_sub'} marginTop={2} />
                <CustomInput imageLink={images.ic_person} placeholder={"Username"} marginTop={50} onChangeText={setUsername} />

                <CustomInput imageLink={images.ic_password} placeholder={"Password"} type={'password'} onChangeText={setPassword} isSecure={true} marginTop={8} />


                <CustomButton value={'Forgot password?'} type={'tertiary'} onPress={onToForgotPasswordPress} marginTop={16} float={'flex-end'} />
                {error ?
                    <CustomText value={"Wrong username or password"} fontSize={'normal'} textColor={"cancel"} />
                    :
                    <></>}
                <CustomButton value={"Sign In"} type={'primary'} onPress={onSignInPress} marginTop={16} buttonbackground={"submit"} />

                <CustomText value={"Or Sign In with"} fontSize={'subtitle'} marginTop={18} />
                <CustomButton value={'Google'} type={'social'} onPress={() => promptAsync()} marginTop={16} imageLink={images.ic_google} />
                <CustomButton value={'Apple'} type={'social'} onPress={onSocialButtonPress} marginTop={8} imageLink={images.ic_apple} />
                <CustomButton value={"Don't have an account? Sign Up here"} onPress={onToSignUpPress} type={'tertiary'} marginTop={24} />
            </SafeAreaView>
        </ScrollView>

    )
}

export default Signin

const styles = StyleSheet.create({

})