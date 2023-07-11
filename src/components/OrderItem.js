import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import customStyle from '../assets/stylesheets/customStyle'
import ColorStyles from '../assets/stylesheets/ColorStyles'
import CustomButton from './CustomButton'
import { priceFormat } from '../utils/helper'
import { useNavigation } from '@react-navigation/native'

const OrderItem = ({marginTop,item}) => {
    const navigation = useNavigation();

    const getOrderStatus = () => {
        if(item.status == 3){
            return "Delivered"
        }
        if(item.status == 2){
            return "On the way"
        }
        if(item.status == 1){
            return "Preparing"
        }
        if(item.status == 0){
            return "Cancel"
        }
    }
    const status = getOrderStatus();

    const onDetailButtonPressed = () => {
        navigation.navigate("Order Detail",{item:item});
    }

    return (
        <View style={[
            customStyle.container,
            ColorStyles.background_input,
            styles.container,
            marginTop != null ? { marginTop: marginTop } : {}]}>
            <View style={customStyle.rowContainer}>
                <CustomText value={"Order No"} />
                <CustomText value={"DR352GK"+item.userOrderID} />
                    <CustomText value={item.arrivedDate} />
            </View>

            <View style={[styles.rowContainerCustom, {marginTop:16}]}>
                <CustomText value={"Quantity"} customStyles={styles.textStyle}/>
                <CustomText value={2}  customStyles={styles.textStyle2}/>
            </View>

            <View style={[styles.rowContainerCustom, {marginTop:8}]}>
                <CustomText value={"Total"} customStyles={styles.textStyle}/>
                <CustomText value={priceFormat(item.totalPrice)} customStyles={styles.textStyle2}/>
            </View>
            
            <View style={[styles.rowContainerCustom, {marginTop:16,justifyContent:'space-between', alignItems:'center', width:'90%'}]}>
            <CustomButton value={"Details"} type={'in_tab'} onPress={onDetailButtonPressed} customStyles={styles.itemMargin} />
            <CustomText value={status} textColor={item.status==3?'success':status==2?'review':status==1?'processing':'cancel'}/>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding:6
    },
    rowContainerCustom:{
        flexDirection:'row',
    }
    ,
    textStyle:{
        flex:1
    },

textStyle2:{
        flex:2
    },

})