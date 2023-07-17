import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomButton from './CustomButton'

const SortOption = () => {
  return (
    <View style={styles.container}>
      <CustomText value={"Sort by"} customStyles={styles.spacing} fontWeight={'heavy'} fontSize={'title'}/>
      <CustomButton value={"Popularity"} customStyles={styles.spacing}/>
      <CustomButton value={"Newest"} customStyles={styles.spacing}/>
      <CustomButton value={"Price: low to high"} customStyles={styles.spacing}/>
      <CustomButton value={"Price: high to low"} customStyles={styles.spacing}/>
    </View>
  )
}

export default SortOption

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#fff',
        justifyContentL:'center',
        alignItems:'center',
        borderTopStartRadius:60,
        borderTopEndRadius:60
    },
    spacing:{
        padding:16
    },
})