import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomInput, CustomText } from '../../../components'
import { UserContext } from '../UserContext'

const ForgotPassword = ({ navigation, route }) => {
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [error, setError] = useState();
    const {email, type} = route.params;

    const { onUpdateUserInfo } = useContext(UserContext);

    const onConfirmPress = async() => {
        if(pass == null){
            setError("Fields cannot be empty");
        }
        if(pass != confirmPass){
            setError("Passwords does not match");
        }
        if (pass == confirmPass && pass != null) {
            result = await onUpdateUserInfo(pass,email,type);
            if(result.response_code == 1){
                navigation.navigate("Success", {title:"Change password success"});
            }
            
        }
        
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomInput imageLink={images.ic_password} placeholder={"Password*"} marginTop={103} type={'password'} onChangeText={setPass} isSecure={true} />
                <CustomInput imageLink={images.ic_password} placeholder={"Confirm Password*"} marginTop={8} type={'password'} onChangeText={setConfirmPass} isSecure={true} />
                {error != null ?
                    <CustomText value={error} fontSize={'normal'} textColor={"cancel"} />
                    :
                    <></>}
                <CustomButton value={"Confirm"} onPress={onConfirmPress} type={'primary'} marginTop={226} />
            </SafeAreaView>
        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})