import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'
import customStyle from '../../../assets/stylesheets/customStyle';
import { CustomInput, CustomButton } from '../../../components';
import * as images from '../../../assets/images'
import ColorStyles from '../../../assets/stylesheets/ColorStyles';
import { UserContext } from '../../Login/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateInfo = ({route,navigation}) => {
    const{email, type} = route.params;
    const [data,setData] = useState();
    inputType = "none";
    switch(type){
      case "PHONENUMBER":
        inputType="numeric";
    }

    const {onUpdateUserInfo} = useContext(UserContext);

    const onChangeButtonPresses = async() => {
        const res = await onUpdateUserInfo(data,email,type);
        if(res.response_code ==1){
            console.warn("Success");
            await AsyncStorage.setItem(type.toLowerCase(),data);
            route.params.onGoBack(data,type);
            navigation.goBack(null);
        } else{
            console.warn("Fail")
            navigation.goBack(null);
        }
    }

  return (
    <SafeAreaView style={customStyle.container}>
    <CustomInput onChangeText={setData} placeholder={type.toLowerCase()} marginTop={103} keyboardType={inputType}/>
      <CustomButton value={`Change ${type.toLowerCase()}`} onPress={onChangeButtonPresses} type={'primary'}  marginTop={60}/>
    </SafeAreaView>
  )
}

export default UpdateInfo

const styles = StyleSheet.create({})