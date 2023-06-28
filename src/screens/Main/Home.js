import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../assets/images'
import customStyle from '../../assets/stylesheets/customStyle'
import { CustomBanner, CustomHeader, ProductListVertical, ProductsListHorizontal } from '../../components'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Home = () => {
    return (
        <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                <CustomHeader />
                <CustomBanner imageLink={images.banner} header={"Super Flash Sale"} day={10} hour={3} minute={32} />
                
                

                <ProductsListHorizontal marginTop={48}/>
                <ProductsListHorizontal marginTop={24}/>

                <ProductListVertical marginTop={24}/>
            </SafeAreaView>
        </ScrollView>
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
        marginTop:12
    }

})