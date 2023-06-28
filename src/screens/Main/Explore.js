import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../assets/images'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomBanner, CustomHeader, CustomText, ProductListVertical, ProductsListHorizontal } from '../../components'

const Explore = () => {
  return (
    <SafeAreaView style={customStyle.container}>
            <CustomHeader />
            <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={customStyle.container}>
                  <CustomText value={'20 result(s)' } type={'header'} customStyles={{alignSelf:'flex-start', marginStart:8}}/>
                    <ProductListVertical marginTop={24} noHeader={true}/>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({})