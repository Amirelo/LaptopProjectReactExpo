import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { AccountTab } from '../../../components'
import { UserContext } from '../../Login/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dataCheck } from '../../../utils/helper'

const Account = ({ navigation }) => {
  const { onGetUserByUsername } = useContext(UserContext);
  const [userData, setUserData] = useState();

  const getUserInfo = async () => {
    username = await AsyncStorage.getItem('username');
    const userInfo = await onGetUserByUsername(username);
    setUserData(userInfo.data);
  }

  useEffect(() => {
    getUserInfo();
  }, [])


  const onPressUserTab = () => {
    navigation.navigate('Profile', { userInfo: userData });
  }
  return (

    <SafeAreaView style={customStyle.container}>

      <AccountTab title={dataCheck(userData, 'username')} subtitle={dataCheck(userData, 'email')} type={'usertab'} imageLink={dataCheck(userData,'imageLink')} onPress={onPressUserTab} />
      <ScrollView style={customStyle.scrollviewContainer} contentContainerStyle={{ paddingBottom: 30, backgroundColor: 'white', alignItems: 'center' }}>
        <AccountTab title={"My order"} subtitle={"12 orders in progress"} />
        <AccountTab title={"Shipping address"} subtitle={"3 addresses"} />
        <AccountTab title={"Payment methods"} subtitle={"Union"} />
        <AccountTab title={"Promocodes"} subtitle={"3 promocodes available"} />
        <AccountTab title={"Change password"} subtitle={"Change your password"} isHighlight={true} />
        <AccountTab title={"Logout"} subtitle={"Logout of your account"} isHighlight={true} />
      </ScrollView>
    </SafeAreaView>

  )
}

export default Account

const styles = StyleSheet.create({})