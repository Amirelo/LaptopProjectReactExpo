import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomButton from './CustomButton'


const ProductPressOption = ({onDelete, customStyle}) => {
  return (
    <View style={[styles.container,customStyle]}>
      <CustomText value={"Action"} customStyles={styles.spacing} fontWeight={'heavy'} fontSize={'title'}/>
      <View style={{borderBottomWidth:1,width:'90%', borderColor:"#9098B150"}}></View>
      <CustomButton value={"Delete from list"} onPress={onDelete}  customStyles={[styles.spacing,{marginBottom:16}]}/>
    </View>
  )
}

export default ProductPressOption

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor:'#fff',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:20,
        position:'absolute',
        marginTop:'20%'
    },
    spacing:{
        padding:16,
    },
})