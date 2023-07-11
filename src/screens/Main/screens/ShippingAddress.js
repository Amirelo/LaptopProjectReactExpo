import { View, Text, SafeAreaView, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { AddressItem } from '../../../components'

const ShippingAddress = ({ route }) => {
  const { userAddresses,userInfo } = route.params;
  return (
    <SafeAreaView style={[customStyle.container,styles.container]}>

      <FlatList
        width={'100%'}
        height={"100%"}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, marginBottom: 16 }}
        data={userAddresses}
        keyExtractor={item => item.addressID}
        renderItem={({ item }) => {
          return <AddressItem marginTop={103}
          fullname={userInfo.username}
          address={item.addressName+", P."+item.ward+", Q."+item.district+", "+item.city}
          phonenumber={userInfo.phonenumber}
          status={item. status} />
        }} />
    </SafeAreaView>

  )
}

export default ShippingAddress

const styles = StyleSheet.create({
  container:{
    justifyContent:'center'
  }
})