import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { AccountTab } from '../../../components'

const Account = ({navigation}) => {
  const onPressUserTab = () => {
    navigation.navigate('Profile');
  }
  return (
    
    <SafeAreaView style={customStyle.container}>
      
      <AccountTab title={"Aran Vador"} subtitle={'aranvador@gmail.com'} type={'usertab'} onPress={onPressUserTab}/>
      <ScrollView style={customStyle.scrollviewContainer} contentContainerStyle={{paddingBottom:30, backgroundColor:'white', alignItems:'center'}}>
      <AccountTab title={"My order"} subtitle={"12 orders in progress"}/>
      <AccountTab title={"Shipping address"} subtitle={"3 addresses"}/>
      <AccountTab title={"Payment methods"} subtitle={"Union"}/>
      <AccountTab title={"Promocodes"} subtitle={"3 promocodes available"}/>
      <AccountTab title={"Change password"} subtitle={"Change your password"} isHighlight={true}/>
      <AccountTab title={"Logout"} subtitle={"Logout of your account"} isHighlight={true}/>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default Account

const styles = StyleSheet.create({})