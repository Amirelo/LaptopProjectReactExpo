import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'

const ProductVertical = ({ imageLink, marginTop }) => {
    return (
        <Pressable style={[styles.container, marginTop? {marginTop:marginTop}:{}]}>
            <CustomImage customStyle={styles.image} imageLink={imageLink} type={'productItem'} />
            <View style={styles.infoContainer}>
                <CustomText value={'MacBook Air 13 inch M1 2020 7-core GPU'} type={'prod_header'} customStyles={styles.textMargin} />
                <View style={styles.rowInfo}>
                <CustomText value={'Intel Core I5'} type={'prod_info'} customStyles={styles.textMargin} />
                <CustomText value={'SSD 512 GB'} type={'prod_info'} customStyles={styles.textMargin} />
                </View>
                <View  style={styles.rowInfo}>
                <CustomText value={'RAM 8 GB'} type={'prod_info'} customStyles={styles.textMargin} />
                <CustomText value={'Intel Iris Xe Graphics'} type={'prod_info'} customStyles={styles.textMargin} />
                </View>

                
                <View style={[styles.rowContainer, styles.textMargin]}>
                <CustomText value={'18.390.000đ'} type={'prod_price'} />
                    <CustomText value={'22.990.000đ'} type={'prod_old_price'}  />
                </View>
            </View>
        </Pressable>
    )
}

export default ProductVertical

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 144,
        backgroundColor: '#FBFBFB',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        flexDirection: 'row'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:8
    },
    textMargin: {
        marginTop: 8,
        marginHorizontal: 8
    },
    image: {
        alignSelf: 'flex-start'
    },
    infoContainer:{
        flex:1
    },
    rowInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})