import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import CustomText from './CustomText'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').width
const CustomBanner = ({ imageLink, header, day, hour, minute, marginRight }) => {
    return (
        <Pressable style={[styles.container, marginRight? {marginEnd:marginRight}:{}]}>
            <Image style={styles.banner_image} source={imageLink} />
            <CustomText value={"Super Flash Sale"} type={'banner_title'} />
            <View style={styles.timerContainer}>
                <CustomText value={day} type={'banner_textbox'} />
                <CustomText value={":"} type={'banner_boxSpace'} />
                <CustomText value={hour} type={'banner_textbox'} />
                <CustomText value={":"} type={'banner_boxSpace'} />
                <CustomText value={minute} type={'banner_textbox'} />
            </View>
        </Pressable>
    )
}

export default CustomBanner

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 206,
        borderRadius: 16,
    },
    banner_image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    timerContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:32,
        marginStart:16
    }
})