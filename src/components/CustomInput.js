import { StyleSheet, Text, TextInput, View } from 'react-native'
import {CustomImage, CustomImageButton} from './'
import React, { useState } from 'react'
import * as images from '../assets/images'

//const internetImg = {uri:'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'}
const CustomInput = ({placeholder, imageLink, marginTop, isSecure, type, width}) => {
    const [showPassImg, setShowPassImg] = useState(images.ic_visibility);
    const [secure, setSecure] = useState(isSecure);
    const onPressVisibility = () => {
        isSecure = false;
        secure==true ? setSecure(false) : setSecure(true);
        showPassImg== images.ic_visibility ? setShowPassImg(images.ic_visibility_off): setShowPassImg(images.ic_visibility);
    }

  return (
    <View style={[
            styles.container,
            marginTop!=null ? {marginTop:marginTop}:{},
            width!= null ? {width:width}: {},
            ]}>
        <CustomImage imageLink={imageLink} type={'inputIcon'}/>
        <TextInput style={styles.inputStyle} placeholder={placeholder} secureTextEntry={secure}></TextInput>
        {type == 'password' ? 
        <CustomImageButton customStyles={styles.endIcon} imageLink={showPassImg} type={'inputIcon'} onPress={onPressVisibility}/>
        :
        <></>}
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputStyle:{
       height:'100%',
       flex:1,
    },
    container:{
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        width: '90%',
        height:48,
        alignItems:'center',
        backgroundColor:'#FBFBFB',
        borderColor:'#EBF0FF'
    },
    endIcon:{
        marginEnd:12
    }
})