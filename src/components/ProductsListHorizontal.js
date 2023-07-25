import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View, FlatList } from 'react-native'
import * as images from '../assets/images'
import CustomText from './CustomText'
import ProductHorizontal from './ProductHorizontal'
import customStyle from '../assets/stylesheets/customStyle'
import { useNavigation } from '@react-navigation/native'
import { discountFormat, priceFormat } from '../utils/helper'
import CustomButton from './CustomButton'

const ProductsListHorizontal = ({ marginTop, data, type, title }) => {
    const navigation = useNavigation()
    const sortingData = () => {
        if (data == null) {
            setTimeout(() => { sortingData }, 1000)
        } else {
            switch (type) {
                case "POPULAR":
                    data.sort((a, b) => {
                        return a.totalRating - b.totalRating;
                    })
                    return data.slice(0,5);
                case "NEW":
                    data.sort((a, b) => {
                        return a.releasedDate - b.releasedDate;
                    })
                    return data.slice(0,5);
                default:
                    return data;
            }
        }
    }

    const sortedData = sortingData();

    const onItemPressed = (item) => {
        navigation.navigate("Product Details",{item:item})
    }

    const onSeeMorePressed = () => {
        navigation.navigate("Explore")
    }

    


    return (
        <View style={styles.container}>
            <View style={[styles.productHeaderContainer, marginTop != null ? { marginTop: marginTop } : {}]}>
                <CustomText value={title} type={'title1'} />
                <CustomButton onPress={onSeeMorePressed} textDecor={"underline"} value={"See more"} type={'subtitle'} />

            </View>
            <FlatList
                width={'100%'}
                height={"100%"}
                horizontal={true}
                marginTop={8}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'space-between', gap: 16 }}
                data={sortedData}
                initialNumToRender={3}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                    return <ProductHorizontal
                        imageLink={{ uri: item.productImageLink }}
                        onPress={()=>onItemPressed(item)}
                        name={item.productName + " " + item.modelCode}
                        curPrice={priceFormat(item.currentPrice)}
                        oldPrice={priceFormat(item.productPrice)}
                        discount={discountFormat(item.onSale)} />
                }} />
        </View>
    )
}

export default ProductsListHorizontal

const styles = StyleSheet.create({
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    container: {
        width: '90%',
        flex: 1
    }
})