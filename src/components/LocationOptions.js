import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CustomText from './CustomText'
import CustomButton from './CustomButton'

const LocationOptions = ({data, onLocationSelected}) => {

    useEffect(()=>{
        console.log("In options", data)
    })
  return (
    <View style={[styles.container]}>
    <CustomText value={"Choose address"} customStyles={styles.spacing} fontWeight={'heavy'} fontSize={'title'}/>
    
    <FlatList
                width={'100%'}
                marginTop={8}
                contentContainerStyle={{ alignItems:'center' }}
                data={data}
                initialNumToRender={3}
                keyExtractor={item => item.addressID}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.container]}>
                        
                        <CustomButton onPress={()=>onLocationSelected(item)} value={item.addressName+", P."+item.ward+", Q."+item.district+", "+item.city} customStyles={styles.spacing}/>

                        </View>
                   )
                }} />
                </View>
  )
}

export default LocationOptions

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#fff',
        justifyContentL:'center',
        alignItems:'center',
        borderTopStartRadius:60,
        borderTopEndRadius:60,
        flex:1,
        
    },
    spacing:{
        padding:16,
    },
})