import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { memo } from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import CustomButton from './CustomButton';
import * as images from '../assets/images'
import CustomImageButton from './CustomImageButton';
import { priceFormat } from '../utils/helper';

const deviceWidth = Dimensions.get("window").width;
const CartItems = ({ marginTop, imageLink, productName, productPrice }) => {
    const dataCheck = (data, type) => {
        if (data == null) {
            setTimeout(() => { dataCheck }, 1000)
        } else {
            return data[type];
        }
    }

    return (
        <Pressable style={[styles.container, marginTop ? { marginTop: marginTop } : {}]}>
            <CustomImage customStyle={styles.image} imageLink={{ uri: imageLink }} type={'cartItem'} />
            <View style={styles.infoContainer}>
                <View style={[styles.rowInfo]}>
                    <CustomText value={productName} type={'prod_header'} maxLines={2} customStyles={[styles.textMargin,{flex:1}]} />
                    <CustomImageButton imageLink={images.ic_more_vert} type={'inputIcon'} />
                </View>
                <View style={[styles.rowInfo,{marginTop:16}]}>
                    <CustomText value={priceFormat(productPrice)} type={'prod_price_nobg'} maxLines={2} customStyles={styles.textMargin} />
                    <View style={styles.rowInfo}>
                    <CustomImageButton imageLink={images.ic_minus} type={'cartQuantityIcon'} />
                    <CustomText value={1}/>
                    <CustomImageButton imageLink={images.ic_add} type={'cartQuantityIcon'} />
                    </View>
                </View>


            </View>
        </Pressable>
    )
}

export default CartItems

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.9,
        height: 104,
        backgroundColor: '#FBFBFB',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        maxWidth: 600,
        flexDirection: 'row',
        alignItems:'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    textMargin: {
        marginTop: 8,
        marginHorizontal: 8
    },
    image: {
        alignSelf: 'flex-start',
        marginStart: 8
    },
    infoContainer: {
        flex: 1
    },
    rowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})