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
const Cart = () => {
  const { onGetUserCart } = useContext(MainContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState();

  const getData = async () => {
    username = await AsyncStorage.getItem('username');
    const cartData = await onGetUserCart(username);
    setData(cartData.data);

    setTotalPrice(0)
    cartData.data.map(item => {
      setTotalPrice(totalPrice + (item.productPrice * item.itemQuantity))
    })
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <SafeAreaView style={customStyle.container}>
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