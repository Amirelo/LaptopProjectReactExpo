import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomText, CustomImage} from './'

const ProductHorizontal = ({imageLink}) => {
  return (
    <Pressable style={styles.container}>
            <CustomImage imageLink={imageLink} type={'productItem'} />
            <CustomText value={'MacBook Air 13 inch M1 2020 7-core GPU'} type={'prod_header'} customStyles={styles.textMargin}/>
            <CustomText value={'18.390.000đ'} type={'prod_price'}customStyles={styles.textMargin} />
            <View style={[styles.rowContainer, styles.textMargin]}>
                <CustomText value={'22.990.000đ'} type={'prod_old_price'} />
                <CustomText value={'Giảm 20%'} type={'prod_discount'} />
            </View>
        </Pressable>
  )
}

export default ProductHorizontal

const styles = StyleSheet.create({
    container:{
        width:'40%',
        height:245,
        backgroundColor:'#FBFBFB',
        borderColor:'#EBF0FF',
        borderWidth:1,
        maxWidth:156,
        borderRadius:4
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop: 12,
    },
    textMargin:{
        marginTop:8,
        marginHorizontal:8
    }
})