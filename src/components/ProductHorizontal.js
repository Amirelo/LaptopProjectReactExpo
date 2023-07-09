import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomImage from './CustomImage'

const ProductHorizontal = ({ imageLink, name, curPrice, oldPrice, discount }) => {
    return (
        <Pressable style={styles.container}>
            <CustomImage imageLink={imageLink} type={'productItem'} />
            <CustomText value={name} type={'prod_header'} maxLines={2} customStyles={styles.textMargin} />
            <CustomText value={curPrice} type={'prod_price'} customStyles={[styles.textMargin,styles.curPrice]} />
            {curPrice != oldPrice ?
            <View style={[styles.rowContainer, styles.textMargin]}>
                <CustomText value={oldPrice} type={'prod_old_price'} />
                <CustomText value={discount} type={'prod_discount'} />
            </View>
            :
            <></>}
        </Pressable>
    )
}

export default ProductHorizontal

const styles = StyleSheet.create({
    container: {
        height: 245,
        backgroundColor: '#FBFBFB',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        maxWidth: 156,
        borderRadius: 4,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    textMargin: {
        marginTop: 8,
        marginHorizontal: 8,
    },
    curPrice:{
        alignSelf:'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 8,
    }
})