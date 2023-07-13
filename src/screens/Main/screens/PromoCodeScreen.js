import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import customStyle from '../../../assets/stylesheets/customStyle'
import { PromoItem } from '../../../components'

const PromoCodeScreen = ({route}) => {
    const {userPromoCodes} = route.params;
  return (
    <SafeAreaView style={[customStyle.container,styles.container]}>
      <FlatList
        width={'100%'}
        height={"100%"}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, marginBottom: 16, alignItems:'center' }}
        data={userPromoCodes}
        keyExtractor={item => item.couponID}
        renderItem={({ item }) => {
          return <PromoItem data={item} marginTop={103}/>
        }} />
      </SafeAreaView>
  )
}

export default PromoCodeScreen

const styles = StyleSheet.create({})