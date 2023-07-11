import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomBanner, CustomHeader, ProductHorizontal, ProductListVertical, ProductVertical, ProductsListHorizontal } from '../../../components'
import { MainContext } from '../MainContext'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Home = ({navigation}) => {
    const {listProducts, listProcessors, listMemories, listScreens,listStorages} = useContext(MainContext);

    const onToFavoritePress = () =>{
        navigation.navigate('Favorite')
    }

    const onToNotificationPress = () =>{
        navigation.navigate('Notification')
    }



    return (
        <SafeAreaView style={customStyle.container}>
            <CustomHeader type={'home'} onFavoritePress={onToFavoritePress} onNotificationPress={onToNotificationPress}/>
            
            <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={customStyle.container}>
                    <CustomBanner imageLink={images.banner} header={"Super Flash Sale"} day={10} hour={3} minute={32} />
                    
                    <ProductsListHorizontal title={"Popular right now"} type={"POPULAR"} marginTop={48} data={listProducts}/>
                    
                    <ProductsListHorizontal title={"New arrivals"}  type={"NEW"} marginTop={24} data={listProducts}/>

                    <ProductListVertical marginTop={24} data={[listProducts, listProcessors,listMemories,listScreens, listStorages]}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 48
    }, scrollview: {
        width: '90%',
        height: '100%',
        marginTop: 12
    }

})