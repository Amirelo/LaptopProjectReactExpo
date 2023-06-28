import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {CustomImage, CustomText} from './';

const CustomButton = ({value, type, marginTop, float, imageLink, onPress}) => {
  return (
    <Pressable 
        onPress={onPress}
        style={[
            type!=null ? styles[`button_${type}`] : {},
            marginTop!= null ? {marginTop:marginTop} : {},
            float!= null ? {alignSelf:`${float}`}:{},
        ]}>
        {type == "social" ?
        <CustomImage imageLink={imageLink} type={'socialIcon'}/> 
            :
        <></>}
        <CustomText value={value} customStyles={type  ? styles[`text_${type}`] : {}}/>
        
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button_primary:{
        width:'90%',
        height: 56,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#02A9F7'
    },
    
    button_tertiary:{
        marginHorizontal:'10%',
    },
    button_social:{
        flexDirection:'row',
        width:'90%',
        height: 56,
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#EBF0FF',
        borderWidth:1,
        borderRadius:10
        
    },
    text_social:{
        flex:1,
        textAlign:'center'
    },
    text_primary:{
        fontSize:14,
        color:'#fff',
        fontWeight:'bold'
    }
})