import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as images from '../assets/images/'
import CustomInput from './CustomInput'
import CustomImageButton from './CustomImageButton'

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <CustomInput imageLink={images.ic_search} type={'tertiary'} placeholder={"search"} width={'70%'}/>
      <CustomImageButton type={'inputIcon'} imageLink={images.ic_favorite}/>
      <CustomImageButton type={'inputIcon'} imageLink={images.ic_notification}/>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:100,
        justifyContent:'space-between',
    }
})