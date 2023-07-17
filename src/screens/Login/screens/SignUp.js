import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomInput } from '../../../components'
import { UserContext } from '../UserContext'

const SignUp = ({navigation, route}) => {
    const [username, setUsername] = useState();
    const [fullName, setFullName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [birthday, setBirthday] = useState();
    const [gender, setGender] = useState();
    const [error, setError] = useState(false);
    const {email, userData} = route.params;
     
    const { onSignUp, onUpdateUserInfo } = useContext(UserContext);

    

    const onConfirmPressed = async() => {
        checkInput();
        console.warn(error);
        if(!error){
            console.warn("Sign up");
            result = await onSignUp(username,password,email, phoneNumber,fullName,gender,birthday);
            console.warn(result)
            if(result.response_code == 1){
                if(userData != null){
                    updateImgLink = await onUpdateUserInfo(userData.picture, userData.email,"IMAGELINK")
                }

                navigation.navigate("Success", {title: 'Sign Up success'})
            } else{
                navigation.navigate("Fail", {title: 'Sign Up fail'})
            }
        }
    }

    const checkInput = () => {
        if (username == null || password == null || confirmPassword == null
            || phoneNumber == null || birthday == null || gender == null
            || password != confirmPassword){
                setError(true);
            } else{
                setError(false);
            }
    }

    useEffect(()=>{
        userData ? setFullName(userData.name):""
    },[])
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomInput imageLink={images.ic_person} placeholder={"Username"} onChangeText={setUsername} marginTop={103} />
                <CustomInput imageLink={images.ic_person} placeholder={"Fullname"} value={userData ? userData.name:""} onChangeText={setFullName} marginTop={8} />
                <CustomInput imageLink={images.ic_password} placeholder={"Password"} marginTop={8} type={'password'} onChangeText={setPassword} isSecure={true} />
                <CustomInput imageLink={images. ic_password} placeholder={"Confirm Password"} marginTop={8} type={'password'} onChangeText={setConfirmPassword} isSecure={true} />
                <CustomInput imageLink={images.ic_phone} placeholder={"Phone number"} onChangeText={setPhoneNumber} marginTop={8} />
                <CustomInput imageLink={images.ic_calendar} placeholder={"Birthday"} onChangeText={setBirthday} marginTop={8} />
                <CustomInput imageLink={images.ic_transgender} placeholder={"Gender"} onChangeText={setGender} marginTop={8} />

                <CustomButton value={"Confirm"} type={'primary'} onPress={onConfirmPressed} marginTop={48} />

            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({})