import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, ProductHorizontal, ProductVertical } from '../../../components'
import * as images from '../../../assets/images'

const Cart = () => {
  return (
    <SafeAreaView style={customStyle.container}>
      <View style={[styles.scrollContainer]}>
      <ScrollView style ={[customStyle.scrollviewContainer]} contentContainerStyle={{gap:8}}>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      <ProductVertical imageLink={images.prod5}/>
      </ScrollView>
      </View>
    <CustomButton value={"Checkout"} type={`primary`} marginTop={32}/>

    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  scrollContainer:{
width:'100%',
height:'70%'
  }
})