import { StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
const deviceWidth = Dimensions.get('window').width;

const CustomImage = ({imageLink, type, marginTop, customStyle}) => {
  return (
    <Image source={imageLink} 
        style={[
            type!=null ? styles[`${type}`] : {},
            marginTop!= null ? {marginTop:marginTop}:{},
            customStyle ? customStyle:{}
        ]}/>
  )
}

export default CustomImage

const styles = StyleSheet.create({
    header:{
        width:72,
        height: 72,
        borderRadius:10,
    },
    inputIcon:{
        width:24,
        height:24,
        marginStart:16,
        marginEnd:12,
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9,
    },
    socialIcon:{
        width:24,
        height:24,
        marginHorizontal:8,
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9,
        position:'absolute'
    },
    productItem:{
        width:139,
        height:112,
        resizeMode:'cover',
        marginTop:16,
        alignSelf:'center'
    },
})