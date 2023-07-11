import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import customStyle from '../assets/stylesheets/customStyle'
import ColorStyles from '../assets/stylesheets/ColorStyles'
import CustomText from './CustomText'
import * as images from '../assets/images'
import CustomImageButton from './CustomImageButton'
import CustomButton from './CustomButton'

const AddressItem = ({ marginTop, fullname, address, phonenumber,  status }) => {
  return (
    <View style={[
      customStyle.container,
      ColorStyles.background_input,
      styles.container,
      marginTop != null ? { marginTop: marginTop } : {}]}>
      <CustomText value={fullname} fontSize={'sub_title'} fontWeight={'heavy'} customStyles={customStyle.itemTextMargin} />
      <CustomText value={address} customStyles={customStyle.itemTextMargin} />
      <CustomText value={phonenumber} customStyles={customStyle.itemTextMargin} />
      <View style={[customStyle.rowContainer, styles.tabBottomMargin]}>
        <View style={customStyle.itemRow}>
          { status==1 ?
            <CustomImageButton imageLink={images.ic_radio_square_selected} />
            :
            <CustomImageButton imageLink={images.ic_radio_square} />}
          <CustomText customStyles={styles.itemMargin} value={"Use as default address"} />
        </View >
        <CustomButton value={"Edit"} type={'in_tab'} customStyles={styles.itemMargin} />
      </View>
    </View>
  )
}

export default AddressItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '90%',
    flex: 0,
    alignSelf: 'center'
  },
  itemMargin: {
    marginHorizontal: 8,
  },
  tabBottomMargin: {
    marginBottom: 8
  }
})