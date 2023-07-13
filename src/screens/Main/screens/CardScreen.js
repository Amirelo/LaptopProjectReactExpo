import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CardItem } from '../../../components'

const CardScreen = ({route}) => {
  const {userCards} = route.params;
  return (
    <View>
      <FlatList
        width={'100%'}
        height={"100%"}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, marginBottom: 16, alignItems:'center' }}
        data={userCards}
        keyExtractor={item => item.cardID}
        renderItem={({ item }) => {
          return <CardItem data={item} marginTop={8}/>
        }} />
    </View>
  )
}

export default CardScreen

const styles = StyleSheet.create({})