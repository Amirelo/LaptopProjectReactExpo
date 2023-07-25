import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { AddressItem, CustomButton, CustomText, RowItem } from '../../../components'
import { priceFormat } from '../../../utils/helper'
import { MainContext } from '../MainContext'

const CheckOutScreen = ({navigation,route}) => {
  const {location,fullName,phoneNumber,totalPrice,note,cart,userID} = route.params;

  const[shippingPrice,setShippingPrice] = useState(200000);
  const[finalPrice,setFinalPrice] = useState(totalPrice+shippingPrice);

  const {onInsertUserOrder,onInsertOrderDetail, onDeleteCart} = useContext(MainContext);

    const onSubmitOrderPressed = async() => {
      const insertOrderResult = await onInsertUserOrder(
        finalPrice,
        finalPrice,
        note,
        fullName,
        shippingPrice,
        location.addressID,
        userID,
        1,
        1);
      console.log("Insert order result:",insertOrderResult)
      if(insertOrderResult.response_code == 1){
      for (let index = 0; index < cart.length; index++) {
          const insertOrderDetailResult = await onInsertOrderDetail(cart[index].itemQuantity,insertOrderResult.data.userOrderID,cart[index].productID);
          console.log("Insert order detail result:", insertOrderDetailResult)
          if (insertOrderDetailResult.response_code == 1){
            const deleteCartItemResult = await onDeleteCart(cart[index].cartID)
            console.log("Delete cart:",deleteCartItemResult)
          }
        }
      }
      navigation.replace("Cart");
    }

  return (
    <View style={[customStyle.container,styles.container]}> 
      <CustomText value={"Shipping address"} marginTop={24} fontSize={'sub_title'} fontWeight={'heavy'} customStyles={{textAlign:'left', width:'100%'}}/>
      <AddressItem address={location.addressName+", P."+location.ward+", Q."+location.district+", "+location.city} phonenumber={phoneNumber} fullname={fullName}/>
      <CustomText value={"Payment"} marginTop={24} fontSize={'sub_title'} fontWeight={'heavy'} customStyles={{textAlign:'left', width:'100%'}}/>
      <View>
      <RowItem valueFirst={"Order"} valueSecond={priceFormat(totalPrice)} type={'both'} marginTop={10}/>
      <RowItem valueFirst={"Shipping price"} valueSecond={priceFormat(shippingPrice)} type={'both'} marginTop={8}/>
      <RowItem valueFirst={"Sumary"} valueSecond={priceFormat(finalPrice)} type={'both'} marginTop={8}/>
      </View>
      <CustomButton value={"Submit order"} onPress={onSubmitOrderPressed} type={'primary'} marginTop={32}/>
    </View>
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({
  container:{
    width:'100%',
    paddingHorizontal:'5%'
  }
})