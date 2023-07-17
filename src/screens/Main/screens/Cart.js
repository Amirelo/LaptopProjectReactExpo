import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomText, ProductHorizontal, ProductVertical } from '../../../components'
import * as images from '../../../assets/images'
import CartItems from '../../../components/CartItems'
import { MainContext } from '../MainContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { priceFormat } from '../../../utils/helper'

const deviceWidth = Dimensions.get('window').width;
const Cart = ({navigation}) => {
  
  const { onGetCartByEmail } = useContext(MainContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

 

  const getData = async () => {
    setIsLoading(true)
    email = await AsyncStorage.getItem('email');
    const cartData = await onGetCartByEmail(email);
    setData(cartData.data);
    setTotalPrice(0);
    let myPrice = 0
    if(cartData!= null){cartData.data.map(item => {
      myPrice +=(item.productPrice * item.itemQuantity);
    });

    setTotalPrice(myPrice);
  }
    else{
    setTotalPrice(0)
    }

    setIsLoading(false)
  }
  useEffect(() => {
      getData();
      
   
  },[navigation])

  return (
    <SafeAreaView style={customStyle.container}>
      {isLoading==false?
      <>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
      
        <FlatList
          width={'100%'}
          height={'100%'}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, marginBottom: 16, alignItems: 'center' }}
          data={data}
          keyExtractor={item => item.productID}
          renderItem={({ item }) => {
            return <CartItems imageLink={item.productImageLink}
              productName={item.productName}
              productPrice={[item.productPrice]} />
          }}
        />
      </ScrollView>
      <View style={styles.rowContainer}>
        <CustomText value={"Total"} />
        <CustomText value={priceFormat(totalPrice)} />
      </View>
      <CustomButton value={"Checkout"} type={`primary`} marginTop={32} />
      <CustomText />
      </> : <></>}
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    height: '70%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  }
})