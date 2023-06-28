import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as images from '../assets/images'
import { CustomText, ProductVertical } from './'
const ProductListVertical = ({ marginTop }) => {
    return (
        <>
            <View style={[styles.productHeaderContainer, marginTop != null ? { marginTop: marginTop } : {}]}>
                <CustomText value={"What you might like"} type={'title1'} />
                <CustomText value={"See more"} type={'subtitle'} />
            </View>
            <ProductVertical imageLink={images.prod4} marginTop={14} />
            <ProductVertical imageLink={images.prod5} marginTop={8} />
            <ProductVertical imageLink={images.prod3} marginTop={8} />
            <ProductVertical imageLink={images.prod4} marginTop={8} />
            <ProductVertical imageLink={images.prod5} marginTop={8} />
            <ProductVertical imageLink={images.prod3} marginTop={8} />
        </>
    )
}

export default ProductListVertical

const styles = StyleSheet.create({
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    }, scrollview: {
        width: '90%',
        height: '100%',
        marginTop: 12
    }
})