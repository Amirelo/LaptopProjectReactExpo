import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { memo, useContext, useEffect, useState } from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import { dataCheck, priceFormat } from '../utils/helper'
import { MainContext } from '../screens/Main/MainContext'


const deviceWidth = Dimensions.get("window").width;
const ProductVertical = ({ marginTop, item,onPress }) => {

        const { onInsertCart, onGetAllProductImages,
            onGetProductProcessor, onGetProductMemory,
            onGetProductScreen, onGetProductStorage,
            onGetProductOS } = useContext(MainContext);
    
        const [isLoading, setIsLoading] = useState(false);
        const [itemProcessor, setItemProcessor] = useState();
        const [itemMemory, setItemMemory] = useState();
        const [itemScreen, setitemScreen] = useState();
        const [itemStorage, setitemStorage] = useState();

        const getInitData = async () => {
            //setIsLoading(true);
    
            const processor = await onGetProductProcessor(item.processorID);
            setItemProcessor(processor);
    
            const memory = await onGetProductMemory(item.memoryID);
            setItemMemory(memory);
    
            const screen = await onGetProductScreen(item.screenID);
            setitemScreen(screen);
    
            const storage = await onGetProductStorage(item.storageID);
            setitemStorage(storage);
    
            //setIsLoading(false)
        }

        useEffect(()=>{
            getInitData();
        },[])

  
    return (
        <Pressable onPress={onPress} style={[styles.container, marginTop ? { marginTop: marginTop } : {}]}>
            <CustomImage customStyle={styles.image} imageLink={item.productImageLink} type={'productItem'} linkType={'uri'}/>
            <View style={styles.infoContainer}>
                <CustomText value={item.productName} type={'prod_header'} maxLines={2} customStyles={styles.textMargin} />
                <View style={styles.rowInfo}>
                    <CustomText value={["",dataCheck(itemProcessor, 'name')]} type={'prod_info'} customStyles={styles.textMargin} />
                    <CustomText value={["RAM ",dataCheck(itemMemory,'currentRAM')]} type={'prod_info'} customStyles={styles.textMargin} />
                </View>
                <View style={styles.rowInfo}>
                        <CustomText value={[dataCheck(itemStorage,'type')," ",dataCheck(itemStorage,'currentStorage')]} type={'prod_info'} customStyles={styles.textMargin} />
                    <CustomText value={["",dataCheck(itemScreen,'screenSize')]} type={'prod_info'} customStyles={styles.textMargin} />
                </View>


                <View style={[styles.rowContainer, styles.textMargin]}>
                <CustomText value={priceFormat(item.currentPrice)} type={'prod_price'} />
                    {item.currentPrice!= item.productPrice?
                    <CustomText value={priceFormat(item.productPrice)} type={'prod_old_price'} />
                    :<></>}
                    
                </View>
            </View>
        </Pressable>
    )
}

export default ProductVertical

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.9,
        height: 144,
        backgroundColor: '#FBFBFB',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        maxWidth: 600,
        flexDirection: 'row'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    textMargin: {
        marginTop: 8,
        marginHorizontal: 8
    },
    image: {
        alignSelf: 'flex-start',
        marginStart: 8
    },
    infoContainer: {
        flex: 1
    },
    rowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})