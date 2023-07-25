import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const RowItem = ({valueFirst, valueSecond,type, firstTextColor,secondTextColor, marginTop}) => {
  return (
    <View style={[styles.rowContainer, marginTop!=null ? {marginTop:marginTop}:{marginTop:4}]}>
      <CustomText value={valueFirst} textColor={firstTextColor} customStyles={type ? styles[`button1_${type}`] : {} }></CustomText>
      <CustomText value={valueSecond} textColor={secondTextColor} customStyles={type ? styles[`button2_${type}`] : {} }></CustomText>
    </View>
  )
}

export default RowItem

const styles = StyleSheet.create({
    rowContainer:{
        width:'100%',
        flexDirection:'row',
    },
    button1_first:{
        flex:1
    },
    button2_second:{
        flex:1
    },
    button1_both:{
        flex:1
    },
    button2_both:{
        flex:1
    }
})