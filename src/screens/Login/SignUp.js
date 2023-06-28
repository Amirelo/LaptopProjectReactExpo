import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../assets/images'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomButton, CustomInput } from '../../components'

const SignUp = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomInput imageLink={images.ic_person} placeholder={"Username*"} marginTop={103} />
                <CustomInput imageLink={images.ic_password} placeholder={"Password*"} marginTop={8} type={'password'} isSecure={true} />
                <CustomInput imageLink={images.ic_password} placeholder={"Confirm Password*"} marginTop={8} type={'password'} isSecure={true} />
                <CustomInput imageLink={images.ic_phone} placeholder={"Phone number"} marginTop={8} />
                <CustomInput imageLink={images.ic_calendar} placeholder={"Birthday"} marginTop={8} />
                <CustomInput imageLink={images.ic_transgender} placeholder={"Gender"} marginTop={8} />

                <CustomButton value={"Confirm"} type={'primary'} marginTop={48} />

            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({})