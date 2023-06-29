import { Pressable, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage'

const CustomImageButton = ({type, imageLink, onPress, customStyles}) => {
  return (
    <Pressable
        onPress={onPress}
        style={[
            type ? styles[`${type}`] : {},
            customStyles
        ]} >
      <CustomImage imageLink={imageLink} type={[styles.inputIcon,type]}/>
    </Pressable>
  )
}

export default CustomImageButton

const styles = StyleSheet.create({
    inputIcon:{
        width:24,
        height:24,
        marginHorizontal:8,
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9
    }
})