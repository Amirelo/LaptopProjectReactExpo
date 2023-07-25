import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomText, RowItem } from '../../../components'
import ColorStyles from '../../../assets/stylesheets/ColorStyles'

const AdvanceSearchScreen = () => {
  return (
    <View style={customStyle.container}>
      <CustomText value={"Price range"} type={'header'} fontWeight={'heavy'}/>
        <RowItem valueFirst={0} valueSecond={100000000}/>

        <CustomText value={"Processor"} type={'title'} fontWeight={'heavy'}/>


        <CustomText value={"CPU"} type={'title'} fontWeight={'heavy'}/>


        <CustomText value={"RAM"} type={'title'} fontWeight={'heavy'}/>


        <CustomText value={"Graphic card"} type={'title'} fontWeight={'heavy'}/>


        <CustomText value={"Storage"} type={'title'} fontWeight={'heavy'}/>

        <CustomButton value={"Apply"}  marginTop={32}/>
        <CustomButton value={"Discard"} customStyles={ColorStyles.cancel} marginTop={8}/>


    </View>
  )
}

export default AdvanceSearchScreen

const styles = StyleSheet.create({})