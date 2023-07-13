import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import customStyle from '../assets/stylesheets/customStyle'
import CustomImage from './CustomImage'
import CustomImageButton from './CustomImageButton'
import * as images from '../assets/images'

const CardItem = ({data}) => {
  return (
    <View>
      <CustomText value={data.cardNumber}/>
      <CustomText value={"Card holder"}/>
      <CustomText value={data.cardHolder}/>
      <CustomText value={"Expiry date"}/>
      <CustomText value={data.expiryMonth +"/"+data.expiryYear}/>
      <View style={customStyle.itemRow}>
          { data.status==1 ?
            <CustomImageButton imageLink={images.ic_radio_square_selected} />
            :
            <CustomImageButton imageLink={images.ic_radio_square} />}
          <CustomText customStyles={styles.itemMargin} value={"Use as default address"} />
        </View >
    </View>
  )
}

export default CardItem

const styles = StyleSheet.create({})