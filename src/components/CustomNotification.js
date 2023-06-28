import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomButton from './CustomButton'

const CustomNotification = ({marginTop}) => {
  return (
    <View style={[styles.container, marginTop!=null ? {marginTop:marginTop}:{}]}>
        <CustomText value={"Summer Deal"} type={'header'} marginTop={16}/>
        <CustomText value={"Check out these hot summer special bargains by clicking on this."} type={'title1'} marginTop={8}/>
        <View style={styles.rowContainer}>
        <CustomButton value={"Mark as read"} type={'tertiary'}/>
        <CustomButton value={"Delete"} type={'tertiary'} />
        </View>

    </View>
  )
}
export default CustomNotification

const styles = StyleSheet.create({
    container:{
        width:'90%',
        borderColor:'#EBF0FF',
        backgroundColor:'#FBFBFB',
        height:144,
        maxWidth:343
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:8
    }
    
})