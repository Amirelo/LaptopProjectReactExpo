import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomBanner, CustomHeader, ProductListVertical, ProductsListHorizontal } from '../../../components'

const Favorite = () => {
    return (
        <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <ProductListVertical marginTop={24} noHeader={true} />
            </SafeAreaView>
        </ScrollView>
    )
}

export default Favorite

const styles = StyleSheet.create({})