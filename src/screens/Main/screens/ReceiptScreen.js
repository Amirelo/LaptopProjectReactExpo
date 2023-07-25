import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomImage, CustomText, RowItem } from '../../../components'
import * as images from '../../../assets/images'

const ReceiptScreen = () => {
  return (
    <View>
        <CustomImage imageLink={images.app_logo}/>
        <RowItem valueFirst={"Receipt number"} valueSecond={"GHT213"}/>
        <RowItem valueFirst={"Created date"} valueSecond={"12-05-2023"}/>

        <View style={styles.receiptContainer}>
        <CustomText value={"Payment receipt"} style={styles.receipt}/>
        </View>

        <CustomText value={"Customer information"}/>
        <RowItem valueFirst={"Name"} valueSecond={"Aron"}/>
        <RowItem valueFirst={"Email"} valueSecond={"aron@gmail.com"}/>
        <RowItem valueFirst={"Phone number"} valueSecond={"0594364642"}/>
        <RowItem valueFirst={"Delivery address"} valueSecond={"53 đường T4B, Phường Tây Thạnh, Quận Tân Phú, Thành phố HCM"}/>
        <RowItem valueFirst={"Payment method"} valueSecond={"cash"}/>

        <CustomText value={"Order detail"}/>

        <RowItem valueFirst={"Item"} valueSecond={"Price"}/>

        <RowItem valueFirst={"Total"} valueSecond={"40.000.000"}/>


      <Text>ReceiptScreen</Text>
    </View>
  )
}

export default ReceiptScreen

const styles = StyleSheet.create({
    receipt:{
        
        height:30,
        backgroundColor:'white'
    },
    receiptContainer:{
        width:'100%',
        backgroundColor:'#02A9F7'
    }
})