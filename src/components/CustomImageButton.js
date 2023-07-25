import { Pressable, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage'

const CustomImageButton = ({ type, imageLink, onPress, customStyles, linkType, marginTop }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        type ? styles[`${type}`] : {},
        marginTop!=null? {marginTop:marginTop}:{},
        customStyles
      ]} >
      <CustomImage imageLink={imageLink} linkType={linkType} customStyle={customStyles} type={type} />
    </Pressable>
  )
}

export default CustomImageButton

const styles = StyleSheet.create({
  inputIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9
  },
  cartQuantityIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    backgroundColor:'#EBF0FF',
    borderRadius:8
  },
  logo:{
    width:72,
    height:72,
    borderRadius:10,
    backgroundColor:'blue'
  }
  
})