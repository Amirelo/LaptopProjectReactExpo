import { Pressable, StyleSheet, Image, View } from 'react-native'
import React from 'react'

const CustomImageButton = ({type, imageLink, onPress, customStyles}) => {
  return (
    <Pressable
        onPress={onPress}
        style={[
            styles.inputIcon,
            type ? styles[`${type}`] : {},
            customStyles
        ]} >
      <Image source={imageLink}/>
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