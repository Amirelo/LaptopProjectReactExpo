import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { AccountTab } from '../../../components'
import { UserContext } from '../../Login/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dataCheck } from '../../../utils/helper'

const Account = ({ route, navigation }) => {
  const { onGetUserByUsername,onGetUserAddress, onGetUserOrder, onSignOut } = useContext(UserContext);
  const [userData, setUserData] = useState();
  const [userAddresses, setUserAddresses] = useState();
  const [userOrders, setUserOrders] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUserInfo = async () => {
    username = await AsyncStorage.getItem('username');
    const userInfo = await onGetUserByUsername(username);
    setUserData(userInfo.data);

    const userAddress = await onGetUserAddress(username);
    setUserAddresses(userAddress.data);
    const userOrder = await onGetUserOrder(userInfo.data.userId);
    setUserOrders(userOrder.data)
  }

  const onGoBackAccount = (data) => {
    setIsLoading(true);
    setUserData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getUserInfo();
  }, [])


  const onPressUserTab = () => {
    navigation.navigate('Profile', { userInfo: userData, onGoBackAccount });
  }

  const onShippingAddressPress = () => {
    navigation.navigate("Shipping Address", {userAddresses:userAddresses, userInfo:userData});
  }

  const onMyOrderPressed = () => {
    navigation.navigate("Order",{userInfo:userData,userOrders:userOrders});
  }

  const onSignOutPressed = () => {
    onSignOut();
  }
  return (

    <SafeAreaView style={customStyle.container}>
      {isLoading == false ?
        <>
          <AccountTab title={dataCheck(userData, 'username')} subtitle={dataCheck(userData, 'email')} type={'usertab'} imageLink={dataCheck(userData, 'imageLink')} onPress={onPressUserTab} />
          <ScrollView style={customStyle.scrollviewContainer} contentContainerStyle={{ paddingBottom: 30, backgroundColor: 'white', alignItems: 'center' }}>
            <AccountTab title={"My order"} subtitle={"12 orders in progress"} onPress={onMyOrderPressed} />
            <AccountTab title={"Shipping address"} subtitle={"3 addresses"} onPress={onShippingAddressPress} />
            <AccountTab title={"Payment methods"} subtitle={"Union"} />
            <AccountTab title={"Promocodes"} subtitle={"3 promocodes available"} />
            <AccountTab title={"Change password"} subtitle={"Change your password"} isHighlight={true} />
            <AccountTab title={"Logout"} subtitle={"Logout of your account"} onPress={onSignOutPressed} isHighlight={true} />
          </ScrollView>
        </>
        : <></>}
    </SafeAreaView>

  )
}

export default Account

const styles = StyleSheet.create({})