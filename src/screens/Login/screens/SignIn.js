import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from '../../../assets/images';
import customStyle from '../../../assets/stylesheets/customStyle';
import { CustomButton, CustomImage, CustomInput, CustomText } from '../../../components';
import {UserContext} from '../UserContext';

const Signin = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const {onSignIn} = useContext(UserContext);


    const onToForgotPasswordPress = () =>{
        navigation.navigate("Verification", {paramKey: 'changepassword'});
    }

    const onSignInPress = async()=> {
    const result =  await onSignIn(username,password);
    if(result){
        setError(false);
    }
    if(!result){
        setError(true);
    }
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
                <CustomInput imageLink={images.ic_person} placeholder={"Username"} marginTop={50} onChangeText={setUsername}/>
                
                <CustomInput imageLink={images.ic_password} placeholder={"Password"} type={'password'} onChangeText={setPassword} isSecure={true} marginTop={8} />
                
                
                <CustomButton value={'Forgot password?'} type={'tertiary'} onPress={onToForgotPasswordPress} marginTop={16} float={'flex-end'} />
                {error?
                <CustomText value={"Wrong username or password"} fontSize={'normal'} textColor={"cancel"}   />
                :
                <></>}
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