import React, { useEffect } from 'react'
import { StyleSheet, View,FlatList } from 'react-native'
import * as images from '../assets/images'
import CustomText from './CustomText'
import ProductVertical from './ProductVertical'
import { priceFormat, discountFormat } from '../utils/helper'
const ProductListVertical = ({ marginTop, noHeader, data }) => {

    const processorFilter = (item) => {
        try{
        if(data[1]!= null && item !=null){
        const processor = data[1];
        const processorItem= processor.filter(proc => proc.processorID == item.processorID)
        return processorItem[0];
        }else{
            setTimeout(() => {
                processorFilter(item);
            },1000)
        }
        } catch(error){
            console.warn(error);
            return null;
        }
    }

    const memoryFilter = (item) => {
        try{
        if(data[2]!= null && item !=null){
        const memory = data[2];
        const memoryItem= memory.filter(mem => mem.memoryID == item.memoryID)
        return memoryItem[0];
        }else{
            setTimeout(() => {
                memoryFilter(item);
            },1000)
        }
        } catch(error){
            console.warn(error);
            return null;
        }
    }

    const screenFilter = (item) => {
        try{
        if(data[3]!= null && item !=null){
        const screen = data[3];
        const screenItem= screen.filter(scre => scre.screenID == item.screenID)

        return screenItem[0];
        }else{
            setTimeout(() => {
                screenFilter(item);
            },1000)
        }
        } catch(error){
            console.warn(error);
            return null;
        }
    }

    const storageFilter = (item) => {
        try{
        if(data[4]!= null && item !=null){
        const storage = data[4];
        const storageItem= storage.filter(stor => stor.storageID == item.storageID)

        return storageItem[0];
        }else{
            setTimeout(() => {
                storageFilter(item);
            },1000)
        }
        } catch(error){
            console.warn(error);
            return null;
        }
    }

    const DataFilter = (item,type,pos) =>{
        try{
            if(data[pos]!= null && item !=null){
            const getTbl = data[pos];
            const item= getTbl.filter(stor => stor[`${type}ID`] == item[`${type}ID`])
    
            return item[0];
            }else{
                setTimeout(() => {
                    DataFilter(item);
                },1000)
            }
            } catch(error){
                console.warn(error);
                return null;
            }
    }


    return (
        <View style={styles.container}>
            {noHeader!=true?
            <View style={[styles.productHeaderContainer, marginTop != null ? { marginTop: marginTop } : {}]}>
                <CustomText value={"What you might like"} type={'title1'} />
                <CustomText textDecor={"underline"} value={"See more"} type={'subtitle'} />
            </View>
            :
            <></>}
            <FlatList
                width={'100%'}
                height={"100%"}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 8, marginBottom:16 }}
                data={data[0]}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                    return <ProductVertical 
                                imageLink={{uri:item.productImageLink}} 
                                name={item.productName + " " + item.modelCode}
                                
                                curPrice={priceFormat(item.currentPrice)}
                                oldPrice={priceFormat(item.productPrice)}
                                discount={discountFormat(item.onSale)}
                                processor={processorFilter(item)}
                                memory={memoryFilter(item)}
                                screen={screenFilter(item)}
                                storage={storageFilter(item)}/>
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
        marginBottom:12
    },
    container:{
        width:'90%',
        flex:1
    }
})