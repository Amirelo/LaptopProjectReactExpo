import React from 'react'
import { ScrollView, StyleSheet, View, FlatList } from 'react-native'
import * as images from '../assets/images'
import CustomText from './CustomText'
import ProductHorizontal from './ProductHorizontal'
import customStyle from '../assets/stylesheets/customStyle'

const ProductsListHorizontal = ({ marginTop, data, type,title }) => {
    const sortedData = data;

    const data1 = data.sort((a,b) => {
        return a.currentPrice - b.currentPrice;
    })

    const dataSort = () => {
        if(type == "popular"){
            sortedData.sort((a,b) => {return b.sold - a.sold;})
        }
        if(type == "new"){
            sortedData.sort((a,b) => a.releasedDate - b.releasedDate)
        }
    }

    const priceFormat = (price) => {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style:'currency',
            currency:'VND'
        });
        return formatter.format(price);
    }

    const discountFormat = (discount) => {
        if(discount.substring(0,1) == '%'){
            result = discount.substring(1,3) + "% off";
        }
        if(discount.length == 0){
            result = "";
        }
        return result;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.productHeaderContainer, marginTop != null ? { marginTop: marginTop } : {}]}>
                <CustomText value={title} type={'title1'} />
                <CustomText textDecor={"underline"} value={"See more"} type={'subtitle'} />

            </View>
            <FlatList
                width={'100%'}
                height={"100%"}
                horizontal={true}
                marginTop={8}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'space-between', gap: 16 }}
                data={data1.slice(0,5)}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                    return <ProductHorizontal 
                                imageLink={{uri:item.productImageLink}} 
                                name={item.productName + " " + item.modelCode}
                                curPrice={priceFormat(item.currentPrice)}
                                oldPrice={priceFormat(item.productPrice)}
                                discount={discountFormat(item.onSale)}/>
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
    container:{
        width:'90%',
        flex:1
    }
})