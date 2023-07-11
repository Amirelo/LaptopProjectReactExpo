import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { OrderItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { UserContext } from '../../Login/UserContext'
import { MainContext } from '../MainContext'

const Order = ({route}) => {
  const {userInfo,userOrders} = route.params;
  

  return (
    <SafeAreaView style={[customStyle.container]}>
      <FlatList
        width={'100%'}
        height={"100%"}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, marginBottom: 16 }}
        data={userOrders}
        keyExtractor={item => item.userOrderID}
        renderItem={({ item }) => {
          return <OrderItem item={item}/>}}/>
      </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({
})