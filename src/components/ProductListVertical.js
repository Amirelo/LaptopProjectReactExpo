import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import * as images from '../assets/images'
import CustomText from './CustomText'
import ProductVertical from './ProductVertical'
import { priceFormat, discountFormat } from '../utils/helper'
import { useNavigation } from '@react-navigation/native'
import CustomButton from './CustomButton'
const ProductListVertical = ({ marginTop, noHeader, data }) => {
    const navigation = useNavigation();

    const [showAmount,setShowAmount] = useState(4);

    const onItemPressed = (item) => {
        navigation.navigate("Product Details", { item: item })
    }

    const loadMore =() =>{
        setShowAmount(prev=>prev+3);
    }

    const onSeeMorePressed = () => {
     
        navigation.navigate("Explore")
    }


    return (
        <View style={styles.container}>
            {noHeader != true ?
                <View style={[styles.productHeaderContainer, marginTop != null ? { marginTop: marginTop } : {}]}>
                    <CustomText value={"What you might like"} type={'title1'} />
                    <CustomButton onPress={onSeeMorePressed} value={"See more"} type={'subtitle'} />
                </View>
                :
                <></>}
            <FlatList
                width={'100%'}
                style={{flex:1}}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 8, marginBottom: 16, }}
                onEndReached={()=>loadMore()}
                onEndReachedThreshold={0.5}
                data={data.slice(0,showAmount)}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                    return <ProductVertical
                        item={item}
                        onPress={()=>onItemPressed(item)}
                         />
                }} />
        </View>
    )
}

export default ProductListVertical

const styles = StyleSheet.create({
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 12
    },
    container: {
        width: '90%',
        flex: 1
    }
})