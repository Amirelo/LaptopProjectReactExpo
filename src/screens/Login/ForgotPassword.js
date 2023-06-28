import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../assets/images'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomButton, CustomInput } from '../../components'

const ForgotPassword = ({navigation}) => {
    const [pass,setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();

    const onConfirmPress = () => {
        pass == confirmPass && pass!= null ? 
        navigation.navigate("Success")
        :
        navigation.navigate("Fail")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomInput imageLink={images.ic_password} placeholder={"Password*"} marginTop={103} type={'password'} isSecure={true} />
                <CustomInput imageLink={images.ic_password} placeholder={"Confirm Password*"} marginTop={8} type={'password'} isSecure={true} />
                <CustomButton value={"Confirm"} onPress={onConfirmPress} type={'primary'} marginTop={226}/>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})