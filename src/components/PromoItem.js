import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage';
import * as images from '../assets/images'
import CustomText from './CustomText';
import { promoDetail } from '../utils/helper';

deviceWidth = Dimensions.get('window').width;
const PromoItem = ({data}) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.rowMainContainer]}>
                <CustomImage imageLink={images.app_logo} />
                <View style={styles.imageSpacing}>
                    <View style={styles.rowItemContainer}>
                        <CustomText value={data.name} />
                        <CustomText value={"6 days remaining"}  />
                    </View>
                    <CustomText value={promoDetail(data.effect,data.maxEffectValue)} marginTop={8} />
                </View>

            </View>
            
        </View>
    )
}

export default PromoItem

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.9
    },
    rowItemContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    rowMainContainer:{
        flexDirection: 'row',
    },
    imageSpacing:{
        marginStart:8,
        flex:1
    }
})