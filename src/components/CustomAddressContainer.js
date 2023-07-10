import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import customStyle from '../assets/stylesheets/customStyle'
import ColorStyles from '../assets/stylesheets/ColorStyles'
import CustomText from './CustomText'

const CustomAddressContainer = () => {
  return (
    <View style ={[customStyle.container, ColorStyles.background_input]}>
      <CustomText value={"Aran Vador"}/>
      <CustomText value={"53 đường T4B, Phường Tây Thạnh, Quận Tân Phú, Thành phố HCM"}/>
      <CustomText value={"0123456789"}/>
    </View>
  )
}

export default CustomAddressContainer

const styles = StyleSheet.create({
})