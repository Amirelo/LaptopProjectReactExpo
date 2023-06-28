import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import * as images from '../assets/images'
import CustomText from './CustomText'
import ProductHorizontal from './ProductHorizontal'

const ProductsListHorizontal = ({marginTop}) => {
    return (
        <>
            <View style={[styles.productHeaderContainer, marginTop!= null ? {marginTop:marginTop}:{}]}>
                <CustomText value={"Popular right now"} type={'title1'} />
                <CustomText value={"See more"} type={'subtitle'} />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview} contentContainerStyle={{ justifyContent: 'space-between', gap: 16 }}>
                <ProductHorizontal imageLink={images.prod1} />
                <ProductHorizontal imageLink={images.prod2} />
                <ProductHorizontal imageLink={images.prod3} />
            </ScrollView>
        </>
    )
}

export default ProductsListHorizontal

const styles = StyleSheet.create({
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    }, scrollview: {
        width: '90%',
        height: '100%',
        marginTop:12
    }
})