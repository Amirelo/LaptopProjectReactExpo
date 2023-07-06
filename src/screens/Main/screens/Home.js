import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomBanner, CustomHeader, ProductListVertical, ProductsListHorizontal } from '../../../components'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Home = ({navigation}) => {

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
                    <ProductsListHorizontal marginTop={48} />
                    <ProductsListHorizontal marginTop={24} />
                    <ProductListVertical marginTop={24} />
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